import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import scrollTo from 'gatsby-plugin-smoothscroll'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"

import Menu from "../components/menu"
import Footer from "../components/footer"

import law from "../images/pattern1.png"
import costs from "../data/costs.json"
import logo from "../images/logo.png"
import building from "../images/building1.jpg"
import books from "../images/books1.jpg"
import agreement from "../images/agreement1.jpg"
import horse from "../images/horse.jpg"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {show: [false, false, false, false, false, false, false, false, false, false]}
  }

  showHide(num){
     this.setState((prevState) => {
         const newItems = [...prevState.show];
         newItems[num] = !newItems[num];
         return {show: newItems};
     });
 }

  render(){
    return(
      <>
        <SEO title="O Kancelarii" />
        <Menu />
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
            <MenuBox>
              <LinkButton onClick={()=> scrollTo('#content')} > O kancelarii </LinkButton>
              <Link to="/services/" style={LinkStyles}> Usługi </Link>
              <Link to="/costs/" style={LinkStyles}> Wynagrodzenie </Link>
              <Link to="/contact/" style={LinkStyles}> Kontakt </Link>
            </MenuBox>
          </HeaderOpacity1>
        </MainHeader>
        <MainBody>
          <Description id='content'>
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
          <QuestionBar onClick={()=>this.showHide(0)}>Zakładanie i obsługa prawna spółek, KRS</QuestionBar>
          {this.state.show[0] === true &&
          <AnswerBox>Prowadzenie każdej firmy wymaga rzetelnej, profesjonalnej i skutecznej obsługi prawnej. Kompleksowo dbamy o kwestie prawne Państwa firmy, dlatego:
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

          <QuestionBar onClick={()=>this.showHide(1)}>Prawo cywilne, umowy, postępowania przed sądami</QuestionBar>
          {this.state.show[1] === true &&
          <AnswerBox>
            Świadczymy kompleksową pomoc prawną:
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

          <QuestionBar onClick={()=>this.showHide(2)}>Prawo pracy i ubezpieczeń społecznych – ZUS</QuestionBar>
          {this.state.show[2] === true &&
          <AnswerBox>Niemal każdego dorosłego Polaka dotyczą kwestie związane z prawem pracy i ZUS-em, dlatego nasze usługi prawne obejmują:
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

          <QuestionBar onClick={()=>this.showHide(3)}>Prawo karne gospodarcze i karnoskarbowe</QuestionBar>
          {this.state.show[3] === true &&
          <AnswerBox>
            Występujemy zarówno jako pełnomocnik pokrzywdzonych jak i obrońca podejrzanych, oskarżonych i skazanych. Nasze usługi obejmują:
            <ul>
              <li>Pełną reprezentację przed organami ścigania i sądami powszechnymi</li>
              <li>Obronę członków organów spółek prawa handlowego przed działaniami na szkodę
              spółki oraz wierzycieli</li>
              <li>Działania z zakresu odpowiedzialności karnej przedsiębiorców oraz członków zarządu spółek
              kapitałowych</li>
            </ul>
          </AnswerBox>
        }

          <QuestionBar onClick={()=>this.showHide(4)}>Postępowania sądowe, egzekucyjne, windykacja należności</QuestionBar>
          {this.state.show[4] === true &&
          <AnswerBox>
          Czas to pieniądz, dlatego gwarantujemy podjęcie szybkich działań prawnych w zakresie egzekwowania długów:
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

          <QuestionBar onClick={()=>this.showHide(5)}>Bieżące konsultacje oraz weryfikacja dokumentów</QuestionBar>
          {this.state.show[5] === true &&
          <AnswerBox>
          Zdajemy sobie sprawę z tego, że potrzeba konsultacji prawnej pojawia się najczęściej niespodziewanie i w najmniej oczekiwanym momencie. Nie zawsze da się na taką sytuację przygotować. Dlatego też:
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

          <QuestionBar onClick={()=>this.showHide(6)}>Klienci indywidualni</QuestionBar>
          {this.state.show[6] === true &&
          <AnswerBox>Świadczymy pomoc prawną na rzecz podmiotów indywidualnych (osób fizycznych). Koncentrujemy swoje działania na rozwiązywaniu problemów, z którymi spotykacie się Państwo w życiu prywatnym i zawodowym. Oferujemy usługi prawne w języku polskim, angielskim i francuskim.
          </AnswerBox>
        }

          <QuestionBar onClick={()=>this.showHide(7)}>Prawo i postępowanie karne oraz wykroczeniowe</QuestionBar>
          {this.state.show[7] === true &&
          <AnswerBox>
          Wychodzimy z założenia, że dla pomyślnego zakończenia postępowania kluczowa jest aktywność i zaangażowanie pełnomocnika. Dajemy zatem Państwu gwarancję
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

          <QuestionBar onClick={()=>this.showHide(8)}>Prawo cywilne, odszkodowania</QuestionBar>
          {this.state.show[8] === true &&
          <AnswerBox>
          Zdajemy sobie sprawę z tego, że szybkie i skuteczne działania prawne – zwłaszcza w sprawach cywilnych lub odszkodowawczych – stanowi dla Państwa priorytet. Mając to na uwadze:
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

          <QuestionBar onClick={()=>this.showHide(9)}>Prawo rodzinne</QuestionBar>
          {this.state.show[9] === true &&
          <AnswerBox>
          Wszystkie sprawy rodzinne wiążą się zawsze z wielkimi emocjami po obu stronach oraz wymagają indywidualnego podejścia i opieki ze strony prawnika. Stąd też zapewniam naszym klientom pełną obsługę prawną w kwestii: 
          <ul>
            <li>Konsultacji i analizy bieżącej sytuacji klienta i członków jego rodziny</li>
            <li>Przygotowania pozwów i wniosków, a następnie prowadzenie spraw sądowych</li>
            <li>Prowadzenie negocjacji pomiędzy małżonkami dotyczących warunków rozwodu oraz
            prowadzenie negocjacji co do podziału majątku wspólnego</li>
          </ul>
          </AnswerBox>
        }

          <QuestionBar onClick={()=>this.showHide(10)}>Prawo pracy</QuestionBar>
          {this.state.show[10] === true &&
          <AnswerBox>
          Umowa o pracę to wciąż bardzo popularna forma zatrudnienia, wychodząc zatem naprzeciw Państwa potrzebom, proponujemy: 
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
        Radca prawny Joanna Kopania uprawia jeździectwo od niemal 30 lat, jest czynnym zawodnikiem dyscypliny skoki przez przeszkody. Dlatego zapewniamy reprezentację i doradztwo we wszelkich sprawach związanych z treningiem, transportem, hodowlą i leczeniem koni, prowadzeniem ośrodków jeździeckich oraz obrotem końmi:
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
          Costs
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

const Header1 = styled.div`
  width: 100%;
  height: 99vh;
  background-image: url(${law});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
  font-size: 30px;
`
const TitleBox = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-left: 20px;
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
`

const MenuBox = styled.div`
  flex-direction: row;
  display: flex;
  margin-top: 50px;
`
const HeaderTop = styled.div`
  flex-direction: row;
  display: flex;
`
const LinkButton = styled.button`
  color: white;
  font-family: "Cinzel";
  font-size: 16px;
  padding: 20px;
  border: none;
  background: none;
  cursor: pointer;
  &:focus{
    outline:none;
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
  height: 75vh;
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
`

const HeaderOpacity = styled.div`
  width: 70%;
  height: 50%;
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
  width: 60%;
  margin-left: 20%;
  margin-top: 20px;
  padding: 20px;
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
  height: 75vh;
  background-image: url(${books});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderHorse = styled.div`
  width: 100%;
  height: 75vh;
  background-image: url(${horse});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderCosts = styled.div`
  width: 100%;
  height: 75vh;
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
  font-weight: 600;
  margin-bottom: 20px;
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
`


export default IndexPage
