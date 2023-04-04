import styled from "styled-components";

export const Body = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  border-radius: 28px;
  opacity: 50%;
  backdrop-filter: blur(10px);
  box-shadow: rgb(121 121 121) 0px 0px 17px;
  margin-top: 10%;
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 10px;
  font-size: smaller;
  padding: 8px;
  border: none;
`;

export const SearchButton = styled.button`
  padding: 5px 5px;
  border-radius: 8px;
  background: white;
  margin-left: 10px;
  font-size: smaller;
`;

export const SearchContainer = styled.div`
  margin-top: 15px;
`;

export const PlaceName = styled.div`
  font-size: x-large;
  font-weight: 300;
  margin: 20px 0px 0px;
`;

export const SummaryTemp = styled.div`
  font-size: xxx-large;
  font-weight: 200;
`;

export const HourlyContainer = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  overflow-x: auto;
  margin-top: 35px;
  border-top: 1px solid #879bb5;
  border-bottom: 1px solid #879bb5;
`;

export const HourlySingleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  padding: 15px 0px;
  p {
    width: 104px;
    font-size: medium;
    font-weight: 300;
    margin: 5px 0px;
  }
`;

export const HourlyHourP = styled.div`
  font-size: small;
  font-weight: 300;
`;

export const DailyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  height: 150px;
  padding-right: 18px;
`;

export const DailyWeatherBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  padding: 13px 0px;
  p {
    flex: 1;
    font-weight: 300;
  }
`;

export const DailyMaxMin = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex: 1;
  font-size: x-small;
`;
