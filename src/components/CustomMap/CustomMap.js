import { useEffect, useRef, useState } from 'react';
import { YMaps, Map, ZoomControl, SearchControl } from 'react-yandex-maps';

export const CustomMap = ({
  showMap,
  selectedData,
  setRouteData,
  setIsMapLoading,
}) => {
  const map = useRef(null);
  const mapState = {
    center: [42.9831, 47.504745],
    zoom: 10,
  };

  const [yyy, setYyy] = useState();
  const [mmm, setMMM] = useState();

  useEffect(() => {
    if (!yyy) return;

    setIsMapLoading(true);

    map.current.geoObjects.remove(mmm);

    yyy.geolocation
      .get({
        provider: 'browser',
        mapStateAutoApply: true,
      })
      .then(function (result) {
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');

        const points = [
          result.geoObjects.position,
          ...selectedData.destinations,
        ];

        const multiRoute = new yyy.multiRouter.MultiRoute(
          {
            referencePoints: points,
            params: {
              routingMode: 'car',
            },
          },
          {
            boundsAutoApply: true,
            editorDrawOver: false,
            editorMidPointsType: 'via',
          }
        );

        multiRoute.model.events.add('requestsuccess', function () {
          const activeRoute = multiRoute.getActiveRoute();
          setRouteData({
            duration: activeRoute.properties.get('distance').text,
            distance: activeRoute.properties.get('duration').text,
          });

        });

        setMMM(multiRoute);

        map.current.geoObjects.add(multiRoute);
        setTimeout(() => {
          setIsMapLoading(false);
        }, 1000);
      });
  }, [mmm, selectedData.destinations, setIsMapLoading, setRouteData, yyy]);

  const onLoad = (ymaps) => {
    setIsMapLoading(true);
    setYyy(ymaps);
    ymaps.geolocation
      .get({
        provider: 'browser',
        mapStateAutoApply: true,
      })
      .then(function (result) {
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');

        const points = [
          result.geoObjects.position,
          ...selectedData.destinations,
        ];

        const multiRoute = new ymaps.multiRouter.MultiRoute(
          {
            referencePoints: points,
            params: {
              routingMode: 'car',
            },
          },
          {
            boundsAutoApply: true,
            editorDrawOver: false,
            editorMidPointsType: 'via',
          }
        );

        multiRoute.model.events.add('requestsuccess', function () {
          const activeRoute = multiRoute.getActiveRoute();
          setRouteData({
            duration: activeRoute.properties.get('distance').text,
            distance: activeRoute.properties.get('duration').text,
          });
        });

        setMMM(multiRoute);

        map.current.geoObjects.add(multiRoute);
        setTimeout(() => {
          setIsMapLoading(false);
        }, 1000);
      });
  };

  return (
    <div
      style={{
        position: showMap ? 'static' : 'absolute',
        opacity: showMap ? 1 : 0,
      }}
      className='container-fluid py-5'
    >
      <div className='container pb-3'>
        <YMaps query={{ apikey: '8595d4e3-4126-4f14-9243-7ff34406a783' }}>
          <Map
            modules={['multiRouter.MultiRoute', 'geolocation', 'geocode']}
            defaultState={mapState}
            width='100%'
            height={500}
            instanceRef={map}
            onLoad={onLoad}
          >
            <ZoomControl options={{ float: 'left' }} />
            <SearchControl options={{ float: 'right' }} />
            {/* <RouteButton options={{ float: "left" }} /> */}
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
