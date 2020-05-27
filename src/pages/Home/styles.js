import styled from 'styled-components';

export const SubContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 40px 10px;
`;
export const Label = styled.Text`
  color: #1cb57b;
  padding-right: 10px;
  width: 80px;
  text-align: right;
  font-weight: bold;
  font-size: 16px;
`;
export const Input = styled.View`
  border-radius: 20px;
  flex-direction:row;
  align-items: center;
  background: #fff;
  padding: 5px 10px;
  width: 150px;
  height: 50px;
  border-radius: 20px;
  border-color: #000;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2px};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 6;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
`;
export const TextInput = styled.TextInput`
  padding: 5px 10px;
  flex: 1;
  width: 80%;
  text-align: right;
`;
export const TextSub = styled.Text`
  color: #1cb57b;
  width: 20%;
`;
export const Button = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  margin: 20px auto 0;
  padding: 12px;
  border-radius: 10px;
  background-color: #1cb57b;
  justify-content: center;
  align-items: center;
`;
export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
export const Result = styled.View`
  margin-top: 70px;
  align-items: center;
  justify-content: center;
`;
export const GreyText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  color: grey;
`;
export const MainText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
`;
export const PesoText = styled.Text`
  font-size: 26px;
  color: #1cb57b;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const ImcBox = styled.View`
  border-width: 2px;
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;
export const ImcValue = styled.Text`
  font-size: 64px;
  font-weight: bold;
`;
