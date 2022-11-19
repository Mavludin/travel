import React from 'react';

import FadeIn from 'react-fade-in';

import { Button, Card, Timeline } from 'antd';

import { ReactComponent as Car } from '../../assets/img/car.svg';
import { RouteData, SelectedData } from '../../pages/Home/Home';

type Props = {
  selectedData: SelectedData;
  setShowMap: (value: boolean) => void;
  routeData: RouteData;
  isMapLoading: boolean;
};

const gridStyle1: React.CSSProperties = {
  width: '50%',
  textAlign: 'center',
  fontSize: 20,
};

const gridStyle2: React.CSSProperties = {
  width: '100%',
};

export const SearchResults = ({
  selectedData,
  setShowMap,
  routeData,
  isMapLoading,
}: Props): JSX.Element => {
  const { destinations } = selectedData;
  const { distance, duration } = routeData;

  const data1 = destinations.map((d1, index) => {
    return (
      <Timeline.Item color={index % 2 ? 'green' : 'red'} key={d1}>
        {d1}
      </Timeline.Item>
    );
  });

  return (
    <FadeIn>
      <div className='container-fluid booking mt-5 pb-5 searchResults'>
        <div className='container pb-5'>
          <div className='bg-light shadow mainSearch'>
            <Card
              loading={isMapLoading}
              type='inner'
              title={
                <>
                  <Car /> На авто
                </>
              }
              extra={
                <Button onClick={() => setShowMap(true)}>
                  Посмотреть карту
                </Button>
              }
            >
              <Card.Grid className='timeline' style={gridStyle2}>
                <Timeline>{data1}</Timeline>
              </Card.Grid>
              <Card.Grid style={gridStyle1}>{duration}</Card.Grid>
              <Card.Grid style={gridStyle1}>{distance}</Card.Grid>
            </Card>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
