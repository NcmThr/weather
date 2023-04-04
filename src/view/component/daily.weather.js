import React, { useContext } from "react";
import { DailyContainer, DailyWeatherBody, DailyMaxMin } from ".";
import moment from "moment";
import { ServiceContext } from "../provider/servise.provider";

const DailyWeather = () => {
  const { data } = useContext(ServiceContext);

  return (
    <DailyContainer>
      {data?.daily?.data?.map((day, index) => {
        return (
          <DailyWeatherBody key={index}>
            <p>{moment(day.day).format("dddd").slice(0, 3)}</p>
            <p>{day.weather}</p>
            <p>{day.all_day.temperature}</p>
            <DailyMaxMin>
              <p>min : {day.all_day.temperature_min}</p>
              <p>max : {day.all_day.temperature_max}</p>
            </DailyMaxMin>
          </DailyWeatherBody>
        );
      })}
    </DailyContainer>
  );
};

export default DailyWeather;
