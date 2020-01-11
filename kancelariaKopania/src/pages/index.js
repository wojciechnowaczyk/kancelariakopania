import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import scrollTo from 'gatsby-plugin-smoothscroll'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"

import Menu from "../components/menu"
import RWDMenu from "../components/RWDMenu"
import Footer from "../components/footer"

import costs from "../data/costs.json"
import logo from "../images/logo.png"
import building from "../images/building.jpg"
import books from "../images/books.jpg"
import agreement from "../images/agreement.jpg"
import horse from "../images/horse.jpg"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      show: [false, false, false, false, false, false, false, false, false, false, false],
      showCosts: [false, false, false, false, false, false],
    }
  }
  showHide(num){
     this.setState((prevState) => {
         const newItems = [...prevState.show];
         newItems[num] = !newItems[num];
         return {show: newItems};
     });
 }

 showHideCosts(num){
    this.setState((prevState) => {
        const newItems = [...prevState.showCosts];
        newItems[num] = !newItems[num];
        return {showCosts: newItems};
    });
}

  render(){
    return(
      <>
        <SEO title="O Kancelarii" />
        <RWDMenu showHide = {this.showHide.bind(this)}/>
        <Menu showHide = {this.showHide.bind(this)}/>
        <MainHeader>
          <HeaderOpacity1>
            <HeaderTop>
              <Logotype src={logo} />
              <TitleBox>
                <HeaderTitle1>
                  Kancelaria
                </HeaderTitle1>
                <HeaderTitle1>
                  Radcy Prawnego
                </HeaderTitle1>
                <HeaderTitle1>
                  Joanna Kopania
                </HeaderTitle1>
              </TitleBox>
            </HeaderTop>
          </HeaderOpacity1>
        </MainHeader>
        <MainBody id='content'>
          <Description>
          Kancelaria Radcy Prawnego Joanna Kopania działa od 2013 roku, świadcząc szeroko rozumianą
          pomoc prawną dla przedsiębiorców i osób fizycznych. Zajmujemy się reprezentacją Klientów w
          postępowaniach sądowych i windykacyjnych, przygotowywaniem pism procesowych, wniosków,
          umów, porozumień, regulaminów i innych dokumentów wymaganych przez Klientów,
          przygotowywaniem opinii prawnych, jak również udzielaniem porad prawnych. Usługi prawne
          świadczymy w języku polskim, języku francuskim oraz języku angielskim. Chcemy aby nasze usługi
          prawne stanowiły dla Państwa rzetelne wsparcie na co dzień, dlatego zapewniamy szybką
          komunikację z prowadzącym sprawę prawnikiem oraz terminowe realizowanie powierzonych zadań.
          </Description>
        </MainBody>
        <HeaderServices id='services'>
          <HeaderOpacity>
            <HeaderTitle>
              Usługi
            </HeaderTitle>
          </HeaderOpacity>
        </HeaderServices>
        <MainBody>
          <QuestionBar onClick={()=>this.showHide(0)} id='services0'>Zakładanie i obsługa prawna spółek, KRS</QuestionBar>
          {this.state.show[0] === true &&
          <AnswerBox onClick={()=>this.showHide(0)}><p>Prowadzenie każdej firmy wymaga rzetelnej, profesjonalnej i skutecznej obsługi prawnej. Kompleksowo dbamy o kwestie prawne Państwa firmy, dlatego:</p>
            <ul>
              <li>Doradzamy przy założeniu spółki</li>
              <li>Kompletujemy wymagane dokumenty</li>
              <li>Przeprowadzamy rejestrację spółek oraz dokonujemy późniejszych zmian w KRS</li>
              <li>Przeprowadzamy audyt prawny (badanie spółek)</li>
              <li>Reprezentujemy w postępowaniach w sprawie nieważności uchwał</li>
              <li>Prowadzimy sprawy korporacyjne – w tym przygotowywanie dokumentacji na Zgromadzenia
              Wspólników oraz posiedzenia Zarządu</li>
              <li>Opracowujemy projekty uchwał</li>
              <li>Świadczymy kompleksową pomoc w łączeniu bądź podziale spółek</li>
              <li>Sporządzamy umowy handlowe i pracownicze</li>
              <li>Reprezentujemy spółki przed sądami</li>
              <li>Wszczynamy oraz monitorujemy przebieg postępowania egzekucyjnego i zabezpieczającego</li>
              <li>Prowadzimy windykację należności</li>
              <li>Podejmujemy działania zmierzające do ochrony przed nieuczciwą konkurencją</li>
            </ul>
          </AnswerBox>
        }

          <QuestionBar onClick={()=>this.showHide(1)} id='services1'>Prawo cywilne, umowy, postępowania przed sądami</QuestionBar>
          {this.state.show[1] === true &&
          <AnswerBox onClick={()=>this.showHide(1)}>
            <p>Świadczymy kompleksową pomoc prawną:</p>
            <ul>
              <li>Oferujemy doradztwo prawne w zakresie relacji handlowych</li>
              <li>Zapewniamy wsparcie prawne w rozwiązywaniu konfliktów w biznesie</li>
              <li>Opracowujemy pozwy, wnioski, apelacje i inne pisma procesowe</li>
              <li>Sporządzamy, weryfikujemy i opiniujemy wszelkie umowy cywilnoprawne</li>
              <li>Przygotowujemy dokumenty cywilnoprawne dla podmiotów gospodarczych z kraju i
              zagranicy sporządzanie wezwań, w tym do zapłaty i do zaniechania naruszeń</li>
              <li>Zapewniamy doradztwo prawne w zakresie obrotu nieruchomościami</li>
              <li>Opracowujemy opinie, audyty i ekspertyzy prawne</li>
              <li>Zapewniamy kompleksowe wsparcie prawne dla Państwa działalności w języku polskim,
              francuskim i angielskim</li>
              <li>Reprezentujemy klientów polskich i zagranicznych przed sądami wszystkich instancji oraz
              przed Sądem Najwyższym</li>
            </ul>
          </AnswerBox>
        }

          <QuestionBar onClick={()=>this.showHide(2)} id='services2'>Prawo pracy i ubezpieczeń społecznych – ZUS</QuestionBar>
          {this.state.show[2] === true &&
          <AnswerBox onClick={()=>this.showHide(2)}><p>Niemal każdego dorosłego Polaka dotyczą kwestie związane z prawem pracy i ZUS-em, dlatego nasze usługi prawne obejmują:</p>
          <ul>
            <li>Kompleksowe opracowanie dokumentacji związanej z zatrudnieniem pracownika, w tym:
            sporządzanie umów o pracę, umów o zakazie konkurencji i zachowania poufności informacji,
            tworzenie regulaminu pracy czy zasad wynagradzania</li>
            <li>Pomoc na etapie prowadzenia kontroli z ZUSu</li>
            <li>Reprezentowanie pracodawców w postępowaniach sądowych</li>
            <li>Pomoc we wdrożeniu regulacji dotyczących przeciwdziałania mobbingowi</li>
            <li>Udzielanie odpowiedzi na wszelkie pytania dotyczące prawa pracy i ubezpieczeń społecznych</li>
          </ul>
          </AnswerBox>
        }

          <QuestionBar onClick={()=>this.showHide(3)} id='services3'>Prawo karne gospodarcze i karnoskarbowe</QuestionBar>
          {this.state.show[3] === true &&
          <AnswerBox onClick={()=>this.showHide(3)}>
            <p>Występujemy zarówno jako pełnomocnik pokrzywdzonych jak i obrońca podejrzanych, oskarżonych i skazanych. Nasze usługi obejmują:</p>
            <ul>
              <li>Pełną reprezentację przed organami ścigania i sądami powszechnymi</li>
              <li>Obronę członków organów spółek prawa handlowego przed działaniami na szkodę
              spółki oraz wierzycieli</li>
              <li>Działania z zakresu odpowiedzialności karnej przedsiębiorców oraz członków zarządu spółek
              kapitałowych</li>
            </ul>
          </AnswerBox>
        }

          <QuestionBar onClick={()=>this.showHide(4)} id='services4'>Postępowania sądowe, egzekucyjne, windykacja należności</QuestionBar>
          {this.state.show[4] === true &&
          <AnswerBox onClick={()=>this.showHide(4)}>
          <p>Czas to pieniądz, dlatego gwarantujemy podjęcie szybkich działań prawnych w zakresie egzekwowania długów:</p>
          <ul>
            <li>Przeprowadzamy kompleksową analizę szans i ryzyka wybranego sposobu dochodzenia
            roszczeń</li>
            <li>Aktywnie monitorujemy przebieg postępowania egzekucyjnego i na bieżąco informujemy
            Klienta o podejmowanych działaniach</li>
            <li>Sporządzamy pisma: wezwania do zapłaty, wezwania do zaniechania naruszeń, pozwy w
            sprawach cywilnych, gospodarczych, z zakresu prawa pracy</li>
            <li>Reprezentujemy Państwa w toku całego postępowania sądowego, także w sprawach karnych i
            karnoskarbowych</li>
            <li>Rozwiązujemy spory powstałe na tle umów z bankami</li>
          </ul>
          </AnswerBox>
        }

          <QuestionBar onClick={()=>this.showHide(5)} id='services5'>Bieżące konsultacje oraz weryfikacja dokumentów</QuestionBar>
          {this.state.show[5] === true &&
          <AnswerBox onClick={()=>this.showHide(5)}>
          <p>Zdajemy sobie sprawę z tego, że potrzeba konsultacji prawnej pojawia się najczęściej niespodziewanie i w najmniej oczekiwanym momencie. Nie zawsze da się na taką sytuację przygotować. Dlatego też:</p>
          <ul>
            <li>Możecie Państwo korzystać z usług naszej kancelarii 5 dni w tygodniu</li>
            <li>Na bieżąco otrzymujecie Państwo porady zarówno w drobnych jak i skomplikowanych
            kwestiach prawnych, opinie dotyczące dokumentów, porady w zakresie skutków prawnych
            decyzji, którą chcecie Państwo podjąć</li>
            <li>Możecie liczyć Państwo na naszą fachowość - nasza praca jest dla nas źródłem satysfakcji
            oraz przyjemności z praktycznego zastosowania posiadanej wiedzy</li>
          </ul>
          </AnswerBox>
        }

          <QuestionBar onClick={()=>this.showHide(6)} id='services6'>Klienci indywidualni</QuestionBar>
          {this.state.show[6] === true &&
          <AnswerBox onClick={()=>this.showHide(6)}><p>Świadczymy pomoc prawną na rzecz podmiotów indywidualnych (osób fizycznych). Koncentrujemy swoje działania na rozwiązywaniu problemów, z którymi spotykacie się Państwo w życiu prywatnym i zawodowym. Oferujemy usługi prawne w języku polskim, angielskim i francuskim.</p>
          </AnswerBox>
        }

          <QuestionBar onClick={()=>this.showHide(7)} id='services7'>Prawo i postępowanie karne oraz wykroczeniowe</QuestionBar>
          {this.state.show[7] === true &&
          <AnswerBox onClick={()=>this.showHide(7)}>
          <p>Wychodzimy z założenia, że dla pomyślnego zakończenia postępowania kluczowa jest aktywność i zaangażowanie pełnomocnika. Dajemy zatem Państwu gwarancję</p>
          <ul>
            <li>Reprezentowania od samego początku postępowania karnego i wykroczeniowego</li>
            <li>Czynnego udziału w przesłuchaniach przed sądem oraz organami ścigania</li>
            <li>Sporządzania zażaleń na postanowienia w przedmiocie ustanowienia, w szczególności
            tymczasowego aresztowania</li>
            <li>Sporządzania odpowiedzi na akty oskarżenia oraz apelacji od wyroków</li>
            <li>Reprezentowania w toku postępowania wykonawczego, szczególnie w zakresie odroczenia,
            przerwy w odbywaniu kary lub w przypadku ubiegania się o warunkowe przedterminowe
            zwolnienie z odbywania kary</li>
          </ul>
          </AnswerBox>
        }

          <QuestionBar onClick={()=>this.showHide(8)} id='services8'>Prawo cywilne, odszkodowania</QuestionBar>
          {this.state.show[8] === true &&
          <AnswerBox onClick={()=>this.showHide(8)}>
          <p>Zdajemy sobie sprawę z tego, że szybkie i skuteczne działania prawne – zwłaszcza w sprawach cywilnych lub odszkodowawczych – stanowi dla Państwa priorytet. Mając to na uwadze:</p>
          <ul>
            <li>Prowadzimy korespondencję na etapie pozasądowym. Bardzo często jest to skuteczna metoda
            dochodzenia roszczeń, eliminująca konieczność wszczynania postępowania sądowego</li>
            <li>Przygotowujemy i opiniujemy (w języku polskim i angielskim) umowy: najmu, dzierżawy,
            leasingu, pożyczki, kredytu, zlecenia, o dzieło, agencyjnych</li>
            <li>Reprezentujemy w trakcie negocjacji kontraktów</li>
            <li>Pomagamy w sprawach prawnych z zakresu obrotu nieruchomościami</li>
            <li>Reprezentujemy przed sądami powszechnymi, Sądem Najwyższym i Naczelnym Sądem
            Administracyjnym</li>
          </ul>
          </AnswerBox>
        }

          <QuestionBar onClick={()=>this.showHide(9)} id='services9'>Prawo rodzinne</QuestionBar>
          {this.state.show[9] === true &&
          <AnswerBox onClick={()=>this.showHide(9)}>
          <p>Wszystkie sprawy rodzinne wiążą się zawsze z wielkimi emocjami po obu stronach oraz wymagają indywidualnego podejścia i opieki ze strony prawnika. Stąd też zapewniam naszym klientom pełną obsługę prawną w kwestii: </p>
          <ul>
            <li>Konsultacji i analizy bieżącej sytuacji klienta i członków jego rodziny</li>
            <li>Przygotowania pozwów i wniosków, a następnie prowadzenie spraw sądowych</li>
            <li>Prowadzenie negocjacji pomiędzy małżonkami dotyczących warunków rozwodu oraz
            prowadzenie negocjacji co do podziału majątku wspólnego</li>
          </ul>
          </AnswerBox>
        }

          <QuestionBar onClick={()=>this.showHide(10)} id='services10'>Prawo pracy</QuestionBar>
          {this.state.show[10] === true &&
          <AnswerBox onClick={()=>this.showHide(10)}>
          <p>Umowa o pracę to wciąż bardzo popularna forma zatrudnienia, wychodząc zatem naprzeciw Państwa potrzebom, proponujemy: </p>
          <ul>
            <li>Przygotowanie oraz weryfikację umowy o pracę</li>
            <li>Konsultacje dotyczące wypowiedzenia umowy o pracę</li>
            <li>Dochodzenie roszczeń odszkodowawczych po rozwiązaniu umowy</li>
            <li>Reprezentowanie na etapie przedsądowym oraz w toku spraw sądowych</li>
            <li>Doradztwo w przypadku umów o zakazie konkurencji oraz umów o zachowaniu poufności</li>
            <li>Sporządzanie umów dla przedstawicieli kadry menadżerskiej</li>
          </ul>
          </AnswerBox>
        }

        </MainBody>

        <HeaderHorse id='horseback'>
          <HeaderOpacity>
            <HeaderTitle>
              Prawo dla miłośników koni i jeździectwa
            </HeaderTitle>
          </HeaderOpacity>
        </HeaderHorse>

        <MainBody>
        <p>Radca prawny Joanna Kopania uprawia jeździectwo od niemal 30 lat, jest czynnym zawodnikiem dyscypliny skoki przez przeszkody. Dlatego zapewniamy reprezentację i doradztwo we wszelkich sprawach związanych z treningiem, transportem, hodowlą i leczeniem koni, prowadzeniem ośrodków jeździeckich oraz obrotem końmi:</p>
        <ul>
          <li>Przygotowanie oraz weryfikacja umów</li>
          <li>Konsultacje i prowadzenie negocjacji przedsądowych</li>
          <li>Reprezentacja przed organami ścigania i sądami powszechnymi</li>
          <li>Kompleksowe wsparcie prawne w toku prowadzonej działalności w języku polskim,
          francuskim i angielskim</li>
        </ul>
        </MainBody>

        <HeaderCosts id='costs'>
          <HeaderOpacity>
            <HeaderTitle>
              Wynagrodzenie
            </HeaderTitle>
          </HeaderOpacity>
        </HeaderCosts>
        <MainBody>
          <p>Na początku współpracy ustalamy wspólnie z klientem wysokość wynagrodzenia lub sposób jego ustalenia. Jesteśmy otwarci na propozycję Klientów i nie wykluczamy negocjacji proponowanych przez Nas zasad współpracy.
          Kancelaria stosuje następujące warianty wynagrodzenia:</p>
          <QuestionBar onClick={()=>this.showHideCosts(0)}>1. Wynagrodzenie za ustną poradę prawną</QuestionBar>
          {this.state.showCosts[0] === true &&
          <AnswerBox onClick={()=>this.showHideCosts(0)}><p><b>Stała opłata w wysokości 200 zł.</b></p>

            <p>W przypadku zlecenia prowadzenia sprawy, koszt porady prawej zalicza się na poczet
            wynagrodzenia za prowadzenie sprawy.</p>

            <p>Porada prawna może być udzielona osobiście, poprzez e-mail, rozmowę telefoniczną lub
            telekonferencję.</p>
          </AnswerBox>
          }
          <QuestionBar onClick={()=>this.showHideCosts(1)}>2. Wynagrodzenie godzinowe</QuestionBar>
          {this.state.showCosts[1] === true &&
          <AnswerBox onClick={()=>this.showHideCosts(1)}><p><b>Stawka wynagrodzenia godzinowego jest ustalana z klientem na początku współpracy a wysokość wynagrodzenia zależna od ilości godzin poświęconych na dane zlecenie.</b></p></AnswerBox>
          }

          <QuestionBar onClick={()=>this.showHideCosts(2)}>3. Wynagrodzenie ryczałtowe</QuestionBar>
          {this.state.showCosts[2] === true &&
          <AnswerBox onClick={()=>this.showHideCosts(2)}><p><b>Stawka wynagrodzenia określona jest na początku współpracy; pozostaje niezmienna i niezależna od czasu, jaki został poświęcony na dane zlecenie. </b>Najczęściej stosowane w przypadku przygotowania pism w postępowaniu sądowym <b>(od 300 zł)</b>, umów, w tym ich opiniowaniu (w zależności od stopnia skomplikowania i wielkości umowy – <b>od 300 zł</b>), opinii prawnych <b>(od 500 zł</b>), rejestracji spółek w KRS (<b>od 1.000 zł</b>).</p>
          </AnswerBox>
          }

          <QuestionBar onClick={()=>this.showHideCosts(3)}>4. Wynagrodzenie abonamentowe</QuestionBar>
          {this.state.showCosts[3] === true &&
          <AnswerBox onClick={()=>this.showHideCosts(3)}>
            <p><b>Stała wysokość okresowego wynagrodzenia za z góry określoną liczbę godzin w danym okresie rozliczeniowym.</b> Model stosowany najczęściej przez podmioty, u których zapotrzebowania na pomoc prawną występuje w bieżącej działalności. </p>
            <p><b>Kancelaria w swojej ofercie posiada abonamenty miesięcznie już od 200 zł netto</b>, które są idealne dla niewielkich przedsiębiorców, którzy w ten sposób mogą zapewnić sobie stałą obsługę prawną, za stosunkowo niewielki pieniądze.</p>
          </AnswerBox>
          }

          <QuestionBar onClick={()=>this.showHideCosts(4)}>5. Wynagrodzenie w sporach sądowych</QuestionBar>
          {this.state.showCosts[4] === true &&
          <AnswerBox onClick={()=>this.showHideCosts(4)}>
            <p><b>Wynagrodzenie uzależnione od stopnia skomplikowania sprawy oraz wysokości dochodzonego roszczenia (jeśli z takim mamy do czynienia).</b> Ustalane zawsze na początku współpracy. <b>Kancelaria w tym zakresie stosuje dwa warianty:</b>
              <ul>
                <li>wynagrodzenie w formie ryczałtu płatne przy podjęciu sprawy,</li>
                <li>wynagrodzenie składające się z opłaty wstępnej (niższej, niż przy ryczałcie) i premii od sukcesu (tzw. success fee) stanowiącej ustalony z Klientem procent od uzyskanego dla niego świadczenia.</li>
              </ul>
            </p>
          </AnswerBox>
          }

          <QuestionBar onClick={()=>this.showHideCosts(5)}>6. Wynagrodzenie w sprawach windykacyjnych</QuestionBar>
          {this.state.showCosts[5] === true &&
          <AnswerBox onClick={()=>this.showHideCosts(5)}>
            <p><b>Wynagrodzenie stosowane w stosunkowo prostych sprawach o zapłatę oraz o odszkodowanie. Kancelaria stosuje tu dwa warianty:</b>
              <ul>
                <li>wynagrodzenie w formie ryczałtu płatne przy podjęciu sprawy, którego wysokość oparta jest na stawkach zastępstwa procesowego wynikających z rozporządzenia Ministra Sprawiedliwości,</li>
                <li>wynagrodzenie składające się z opłaty wstępnej (możliwość podjęcia sprawy za wynagrodzenie w wysokości już od 100 zł) i premii od sukcesu (tzw. success fee) stanowiącej ustalony z Klientem procent od uzyskanego dla niego świadczenia.</li>
              </ul>
            </p>
          </AnswerBox>
          }
          <LinkButton onClick={()=> scrollTo('#contact')}> Zapraszamy do współpracy! </LinkButton>
        </MainBody>
        <Header id='contact'>
          <HeaderOpacity>
            <HeaderTitle>
              Kontakt
            </HeaderTitle>
          </HeaderOpacity>
        </Header>
        <Menu />
        <MainBody>
          <ContactInfo>
          Kancelaria Radcy Prawnego Joanna Kopania
          </ContactInfo>
          <ContactInfo>
          ul. Platynowa 28 <br />
          62-052 Komorniki Poznań
          </ContactInfo>
          <ContactInfo>
          Telefon: 501-498-704 <br />
          email: kancelaria@radcakopania.pl
          </ContactInfo>
          <ContactInfo>
          Godziny otwarcia: <br />
          8:00-16:00 (istnieje możliwość umówienia się na spotkanie w godzinach późniejszych, jak <br />
          również możliwy jest kontakt z Kancelarią pod podanymi numerami po godzinach pracy)
          </ContactInfo>
          <ContactInfo>
          Zapewniamy Parking dla klientów
          </ContactInfo>
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.2127705739167!2d16.829048415781113!3d52.348426156682756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47044f8dd975788d%3A0x167eb4747791e86c!2sPlatynowa%2028%2C%2062-052%20Komorniki!5e0!3m2!1spl!2spl!4v1573763401662!5m2!1spl!2spl" ></Map>
        </MainBody>
        <Footer />
      </>
  )}
  }


const HeaderOpacity1 = styled.div`
  width: 100%;
  height: 75vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const HeaderTitle1 = styled.h1`
  color: white;
  font-size: 50px;
`
const TitleBox = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-left: 20px;

  @media screen and (max-width: 620px){
    margin-left: 0px;
    text-align: center;
  }
`
const Description = styled.p`
  font-size: 16px;
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

const Logotype = styled.img`
  width: 200px;
  height: 200px;

  @media screen and (max-width: 620px){
    margin-bottom: 30px;
  }
`

const HeaderTop = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 620px){
    flex-direction: column;
  }
`
const LinkStyles = {
  color: 'white',
  textDecoration: 'none',
  fontFamily: "Cinzel",
  fontSize: '16px',
  padding: '20px',
}

const Header = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${building});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MainHeader = styled.div`
  width: 100%;
  height: 75vh;
  background-image: url(${building});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  @media screen and (max-width: 999px){
    margin-top: 0px;
  }
`

const HeaderOpacity = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderTitle = styled.h1`
  color: white;
  font-size: 45px;
  text-align: center;
`

const MainBody = styled.div`
  width: 60%;
  margin-left: 20%;
  margin-top: 20px;
  padding: 20px;
  padding-top: 10vh;
  padding-bottom: 10vh;

  @media screen and (max-width: 620px){
    width: 80%;
    margin-left: 10%;
  }
`

const SubTitle = styled.h2`
  font-size: 20px;
  border-bottom: 4px solid #48689A;
`

const ContactInfo = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
`

const Map = styled.iframe`
  width: 100%;
  height: 500px;
  border:0;
  frameborder: 0;
  }
`

const HeaderServices = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${books});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderHorse = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${horse});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderCosts = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${agreement});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const QuestionBar = styled.p`
  width: 90%;
  border-left: 2px solid rgb(134, 89, 45);
  padding-left: 40px;
  font-size: 20px;
  font-family: "Cinzel";
  margin-bottom: 20px;
  cursor: pointer;
`

const AnswerBox = styled.div`
  width: 90%;
  border-left: 1px solid #48689A;
  margin-left: 40px;
  padding-left: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 16px;
  white-space: pre-wrap;
  cursor: pointer;
`

const LinkButton = styled.a`
  color: black;
  text-decoration: none;
  font-family: "Lato";
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &:focus{
    outline:none;
  }
  &:hover{
    border-bottom: 2px solid #48689A;
  }
`


export default IndexPage
