import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, Keyboard, StatusBar} from 'react-native';
import {AdMobBanner} from 'react-native-admob';

import {Container} from '../../styles';
import {
  SubContainer,
  TextInput,
  TextSub,
  Input,
  Label,
  Button,
  TextButton,
  Result,
  MainText,
  GreyText,
  PesoText,
  ImcBox,
  ImcValue,
} from './styles';

function HomeScreen({navigation}) {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState('');
  const [imcRank, setImcRank] = useState('');

  useEffect(() => {
    setAltura('');
    setPeso('');
  }, []);

  const handleIMC = (txt) => {
    Keyboard.dismiss();
    const quadradoAltura = parseFloat(altura) * parseFloat(altura);
    const valorImc = peso / quadradoAltura;

    rankImc(parseFloat(valorImc));

    setIMC(Math.floor(valorImc).toString());
    setPeso('');
    setAltura('');
  };

  const rankImc = (imc) => {
    if (imc <= 18.5) {
      setImcRank('magreza');
    } else if (imc > 18.5 && imc < 25) {
      setImcRank('saudável');
    } else if (imc >= 25 && imc < 30) {
      setImcRank('sobrepeso');
    } else if (imc >= 30 && imc < 40) {
      setImcRank('obesidade');
    } else {
      setImcRank('obesidade grave');
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Container>
        <SubContainer>
          <Label>Peso</Label>
          <Input>
            <TextInput
              placeholder="80"
              placeholderTextColor="#ccc"
              value={peso}
              onChangeText={(txt) => setPeso(txt)}
              keyboardType="numeric"
            />
            <TextSub>Kg</TextSub>
          </Input>
        </SubContainer>
        <SubContainer>
          <Label>Altura</Label>
          <Input>
            <TextInput
              placeholder="1.80"
              placeholderTextColor="#ccc"
              value={altura}
              onChangeText={(txt) => setAltura(txt)}
              keyboardType="numeric"
            />
            <TextSub>Mts</TextSub>
          </Input>
        </SubContainer>
        <Button onPress={() => handleIMC()}>
          <TextButton>Calcular</TextButton>
        </Button>
        {imc > 0 && (
          <Result>
            <GreyText>Seu IMC</GreyText>
            <MainText
              style={[
                {
                  color: {
                    ['magreza']: '#5fdde5',
                    ['saudável']: '#1cb57b',
                    ['sobrepeso']: '#fc8210',
                    ['obesidade']: '#d63447',
                    ['obesidade grave']: '#e71414',
                  }[imcRank],
                },
              ]}>
              {imcRank}
            </MainText>

            {/* <GreyText>Seu peso ideal e entre</GreyText>
          <PesoText>60kg a 70kg</PesoText> */}

            <ImcBox
              style={[
                {
                  borderColor: {
                    ['magreza']: '#5fdde5',
                    ['saudável']: '#1cb57b',
                    ['sobrepeso']: '#fc8210',
                    ['obesidade']: '#d63447',
                    ['obesidade grave']: '#e71414',
                  }[imcRank],
                },
              ]}>
              <GreyText>imc</GreyText>
              <ImcValue
                style={[
                  {
                    color: {
                      ['magreza']: '#5fdde5',
                      ['saudável']: '#1cb57b',
                      ['sobrepeso']: '#fc8210',
                      ['obesidade']: '#d63447',
                      ['obesidade grave']: '#e71414',
                    }[imcRank],
                  },
                ]}>
                {imc}
              </ImcValue>
            </ImcBox>
          </Result>
        )}
      </Container>
      <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-2270636537108959/8109706224"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={(error) => console.error(error)}
      />
    </>
  );
}

export default HomeScreen;
