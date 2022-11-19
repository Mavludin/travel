import { YMaps, Map, ZoomControl, SearchControl } from "react-yandex-maps";

export const CustomMap = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pb-3">
        <YMaps>
          <Map height={400} width="100%" defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
            <ZoomControl options={{ float: "left" }} />
            <SearchControl options={{ float: "right" }} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}
