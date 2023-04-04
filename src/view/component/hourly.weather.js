import React, { useContext } from "react";
import { HourlyContainer, HourlySingleContainer, HourlyHourP } from ".";
import { ServiceContext } from "../provider/servise.provider";

const HourlyWeather = () => {
  const { data } = useContext(ServiceContext);

  return (
    <HourlyContainer>
      {data?.hourly?.data?.map((hr, index) => {
        return (
          <HourlySingleContainer key={index}>
            <HourlyHourP>H : {hr.date.split("T")[1].slice(0, 2)}</HourlyHourP>
            <p>{hr.summary}</p>
            <HourlyHourP>T : {hr.temperature}</HourlyHourP>
          </HourlySingleContainer>
        );
      })}
    </HourlyContainer>
  );
};

export default HourlyWeather;
