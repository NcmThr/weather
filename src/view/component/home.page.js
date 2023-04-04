import React, { useContext } from "react";
import { Body, HomeContainer, SearchInput, SearchButton, SearchContainer, PlaceName, SummaryTemp } from ".";
import HourlyWeather from "./hourly.weather";
import DailyWeather from "./daily.weather";
import { ServiceContext } from "../provider/servise.provider";
import { Spin } from "antd";
import { LoaderContext } from "../provider/loader.provider";
import { LoadingOutlined } from "@ant-design/icons";

const HomePage = () => {
  const { data, placeId, setPlaceId, getData } = useContext(ServiceContext);
  const { loading } = useContext(LoaderContext);
  //   const [data, setData] = useState("");
  //   const [placeId, setPlaceId] = useState("");

  //   const base_url = "https://www.meteosource.com/";
  //   const API_KEY = "na2bj1w0bcgdxj8wvtfhqd0vkt0i9ueub4tuob4p";

  //   const getData = async () => {
  //     try {
  //       setPlaceId(placeId);
  //       const res = await axios.get(
  //         `${base_url}api/v1/free/point?place_id=${placeId}&sections=all&timezone=UTC&language=en&units=metric&key=${API_KEY}`
  //       );
  //       setData(res?.data);
  //     } catch (error) {
  //       console.log(error?.message);
  //     }
  //   };

  //   const dateString = data?.hourly?.data[0]?.date;
  //   console.log(dateString);
  //   const dateObject = new Date(dateString);
  //   console.log(dateObject);

  //   const hours = dateObject.getHours();
  //   const minutes = dateObject.getDay();
  //   console.log(minutes);
  //   const timeString = dateObject.toString().slice(16, 21);

  //   console.log(hours); // 19
  //   console.log(minutes); // 0
  //   console.log(timeString); // "19:00"

  //   useEffect(() => {
  //     const dateTimeString = data?.hourly?.data?.date;
  //     const timeString = dateTimeString.split("T")[1];
  //     setTime(timeString);
  //     console.log(time);
  //   }, []);

  //   const date = moment(data?.daily?.data[2]?.day);
  //   const dayName = date.format("dddd");

  //   console.log(dayName); // Output: 'Monday'

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  return (
    <HomeContainer>
      <Body>
        <SearchContainer>
          <SearchInput onChange={(e) => setPlaceId(e.target.value)} type="text" placeholder="select your location" />
          <SearchButton onClick={() => getData()}>Search</SearchButton>
        </SearchContainer>
        {loading ? (
          <Spin style={{ position: "absolute", marginTop: "36%" }} indicator={antIcon} />
        ) : (
          <>
            <PlaceName>{placeId}</PlaceName>
            <p>{data?.current?.summary}</p>
            <SummaryTemp>{data?.current?.temperature}</SummaryTemp>
            <HourlyWeather />
            <DailyWeather />
          </>
        )}
      </Body>
    </HomeContainer>
  );
};

export default HomePage;
