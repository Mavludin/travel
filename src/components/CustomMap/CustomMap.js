import { useRef, useState } from "react";
import {
  YMaps,
  Map,
  ZoomControl,
  SearchControl,
  RouteButton,
} from "react-yandex-maps";

export const CustomMap = () => {
  const map = useRef(null);
  const mapState = {
    center: [42.9831, 47.504745],
    zoom: 10,
  };

  const onLoad = (ymaps) => {
    ymaps.geolocation
      .get({
        provider: "browser",
        mapStateAutoApply: true,
      })
      .then(function (result) {
        result.geoObjects.options.set("preset", "islands#blueCircleIcon");

        const points = [result.geoObjects.position, "Гуниб", "Хунзах"];

        const multiRoute = new ymaps.multiRouter.MultiRoute(
          {
            referencePoints: points,
            params: {
              routingMode: "car",
            },
          },
          {
            boundsAutoApply: true,
            editorDrawOver: false,
            editorMidPointsType: "via",
          }
        );

        multiRoute.model.events.add('requestsuccess', function() {
            const activeRoute = multiRoute.getActiveRoute();
            console.log("Длина: " + activeRoute.properties.get("distance").text);
            console.log("Время прохождения: " + activeRoute.properties.get("duration").text);
            if (activeRoute.properties.get("blocked")) {
                console.log("На маршруте имеются участки с перекрытыми дорогами.");
            }
        });

        map.current.geoObjects.add(multiRoute);
        // console.log(map.current.geoObjects.add(multiRoute));
      });
  };

  return (
    <div className="container-fluid py-5">
      <div className="container pb-3">
        <YMaps query={{ apikey: "8595d4e3-4126-4f14-9243-7ff34406a783" }}>
          <Map
            onBoundChange={(a) => console.log(a)}
            modules={["multiRouter.MultiRoute", "geolocation", "geocode"]}
            defaultState={mapState}
            width="100%"
            height={500}
            instanceRef={map}
            onLoad={onLoad}
          >
            <ZoomControl options={{ float: "left" }} />
            <SearchControl options={{ float: "right" }} />
            {/* <RouteButton options={{ float: "left" }} /> */}
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
