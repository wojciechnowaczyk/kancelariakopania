import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"

import SecondMenu from "../components/secondMenu"
import Footer from "../components/footer"

import agreement from "../images/agreement.jpg"

class PrivacyPolicy extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <>
        <SEO title="Polityka Prywatności" />
        <SecondMenu />
        <Header>
          <HeaderOpacity>
            <HeaderTitle>
              Polityka Prywatności
            </HeaderTitle>
          </HeaderOpacity>
        </Header>
        <MainBody>
          <QuestionBar>§1<br/> Zasady ogólne i definicje</QuestionBar>
          <AnswerBox>
          <ol>
            <li>Na podstawie art. 173 ustawy z dnia 16 lipca 2004 roku Prawo telekomunikacyjne radca prawny Joanna Kopania prowadząca Kancelarię Radcy Prawnego przy ul. Naramowickiej 217d/44, 61-611 Poznań (filia ul. Platynowa 28, 62-052 Komorniki), zwana dalej „administratorem serwisu”, wprowadza politykę plików „cookies”, zwaną dalej „Polityką”.</li>
            <li>Niniejsza Polityka dotyczy plików „cookies” i odnosi się do stron internetowych, których operatorem jest administrator serwisu tj. stron widocznych pod adresami/em portalu : www.adwokat-poznan.com / www.aliantlaw.pl</li>
            <li>Ilekroć w niniejszej Polityce używane są następujące określenia oznaczają one każdorazowo:
              <ul>
                <li>&quot;Serwis&quot; - serwis znajdujący się w sieci Internet pod adresem proszę wpisać adres strony internetowej kancelarii) oraz wszystkie funkcje i narzędzia dostępne za pośrednictwem tego serwisu.</li>
                <li>&quot;Użytkownik&quot; - każda osoba, która w jakikolwiek sposób korzysta z zasobów Serwisu.</li>
                <li>&quot;Dane osobowe&quot; – rozumie się przez to informacje zawierające dane osobowe w rozumieniu ustawy o ochronie danych osobowych m.in.: imię i nazwisko, numer telefonu, adres poczty elektronicznej email, oraz inne dane, w tym dane teleadresowe,wprowadzone przez Użytkownika.</li>
              </ul>
            </li>
          </ol>
          </AnswerBox>

          <QuestionBar>§2<br />Czym są pliki &quot;cookies&quot;</QuestionBar>
          <AnswerBox>
          <ol>
            <li>Pliki „cookies”, tzw. „ciasteczka”, to niewielkie pliki tekstowe, przechowywane w urządzeniach końcowych Użytkowników, przeznaczone do korzystania ze stron internetowych.</li>
            <li>Pliki „cookies” pozwalają rozpoznać urządzenie Użytkownika i odpowiednio wyświetlić stronę internetową dostosowaną do jego indywidualnych preferencji. „Cookies” zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.</li>
            <li>Stosowane są co do zasady dwa zasadnicze rodzaje plików „cookies”: „sesyjne”  (session cookies) oraz „stałe” (persistent cookies).</li>
            <li>Pliki „cookies” „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej).</li>
            <li>Pliki „cookies” „stałe” przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików „cookies” lub do czasu ich ręcznego usunięcia przez Użytkownika.</li>
          </ol>
          </AnswerBox>

          <QuestionBar>§3 <br />Do czego używane są pliki &quot;cookies&quot;</QuestionBar>
          <AnswerBox>
            <ol>
              <li>Pliki „cookies” używane są w celu dostosowania zawartości stron internetowych do preferencji Użytkownika oraz optymalizacji korzystania ze stron internetowych. Używane są również w celu tworzenia anonimowych (bez personalnej identyfikacji Użytkownika), zagregowanych statystyk, które pomagają zrozumieć, w jaki sposób Użytkownik korzysta ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości.</li>
              <li>Usługodawca przechowuje pliki „cookies” na urządzeniu końcowym Użytkownika, a następnie uzyskuje dostęp do informacji w nich zawartych w celach statystycznych oraz w celu zapewnienia prawidłowego działania strony www.</li>
              <li>Pliki „cookies” nie zawierają danych identyfikujących, na ich podstawie nie można ustalić czyjejkolwiek tożsamości. Pliki te nie są w żaden sposób szkodliwe dla urządzeń do przeglądania stron internetowych i nie zmieniają jego ustawień, ani ustawień zainstalowanego na nim oprogramowania. Odczytanie zawartości tych plików możliwe jest jedynie przez serwer, który je utworzył.</li>
            </ol>
          </AnswerBox>

          <QuestionBar>§4 <br />Pliki &quot;cookies&quot; a dane osobowe</QuestionBar>
          <AnswerBox>Pliki „cookies” nie służą do przetwarzania danych osobowych, a ich zawartość nie pozwala na identyfikacje Użytkownika. Dane osobowe gromadzone przy użyciu plików „cookies” mogą być zbierane wyłącznie w celu wykonywania określonych funkcji na rzecz Użytkownika. Takie dane są zaszyfrowane w sposób uniemożliwiający dostęp do nich osobom nieuprawnionym.</AnswerBox>

          <QuestionBar>§5<br />Usuwanie plików &quot;cookies&quot;</QuestionBar>
          <AnswerBox>
            <ol>
              <li>Co do zasady oprogramowanie służące do przeglądania stron internetowych - przeglądarki stron internetowych, domyślnie pozwalają na umieszczanie plików „cookies” na urządzeniu końcowym.</li>
              <li>Ustawienia, o których mowa powyżej, mogą zostać zmienione przez Użytkownika w taki sposób, aby blokować automatyczną obsługę plików „cookies” w ustawieniach przeglądarki internetowej, bądź informować o ich każdorazowym przesłaniu na urządzenie Użytkownika. Pliki „cookies” mogą być przez Użytkownika usunięte po ich zapisaniu przez Usługodawcę, poprzez odpowiednie funkcje przeglądarki, programy służące w tym celu lub skorzystanie z odpowiednich narzędzi dostępnych w tym celu w ramach systemu operacyjnego, z którego korzysta Użytkownik.</li>
              <li>Szczegółowe informacje o możliwości i sposobach obsługi plików „cookies” przy korzystaniu z danej przeglądarki internetowej, dostępne są w ustawieniach oprogramowania danej przeglądarki.</li>
              <li>Ustawienia przeglądarki internetowej w danym urządzeniu, pozwalające na zapisywanie plików „cookies” oznaczają, że Użytkownik wyraża zgodę, aby pliki te zapisywane były na używanym przez niego urządzeniu.</li>
              <li>Wyżej opisane ograniczenie stosowania plików „cookies”, może wpłynąć na niektóre funkcjonalności dostępne na stronie internetowej.</li>
            </ol>
          </AnswerBox>

          <QuestionBar>§6<br />Pytania</QuestionBar>
          <AnswerBox> Pytania dotyczące zakresu Polityki Cookies należy kierować za pomocą adresu e-mail widocznego na stronach Serwisu lub pisemnie na adres korespondencyjny.</AnswerBox>

          <QuestionBar>§7<br />Postanowienia końcowe</QuestionBar>
          <AnswerBox>
            <ol>
              <li>W sprawach nieobjętych niniejszą Polityką mają zastosowanie przepisy prawa powszechnie obowiązującego w szczególności ustawy o ochronie danych osobowych i ustawy prawo telekomunikacyjne.</li>
              <li>Administrator serwisu zastrzega sobie prawo dokonywania zmian w Polityce. Zmiany wchodzą w życie z chwilą zamieszczenia zmienionej Polityki i w witrynie internetowej.</li>
            </ol>
          </AnswerBox>
        </MainBody>
        <Footer />
      </>
  )}
  }

const Header = styled.div`
  width: 100%;
  height: 75vh;
  background-image: url(${agreement});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderOpacity = styled.div`
  width: 100%;
  height: 75vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderTitle = styled.h1`
  color: white;
  font-size: 60px;
`

const MainBody = styled.div`
  width: 80%;
  margin-right: 1%;
  margin-left: 20%;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-right: 10%;
`

const ServiceBox = styled.div`
  width: 500px;
  border: 1px solid black;
`

const ServiceTitle = styled.p`
  border: 1px solid green;
`

const ServiceBody = styled.div`
  border: 1px solid red;
`

const QuestionBar = styled.p`
  width: 90%;
  border-left: 2px solid rgb(134, 89, 45);
  padding-left: 40px;
  font-size: 20px;
  font-family: "Cinzel";
  font-weight: 600;
`

const AnswerBox = styled.p`
  width: 90%;
  border-left: 1px solid #48689A;
  margin-left: 40px;
  padding-left: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 16px;
`

export default PrivacyPolicy
