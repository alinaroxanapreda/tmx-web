import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from "reactstrap";
import Menu from './components/menu'
import {PLACES} from './shared/places'
import Greet from './components/greet'


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            places: PLACES
        }
    }

    render() {
        return (
            <div className="App">
                {/*<Navbar color="primary">*/}
                {/*    <div colorName="container" id="brand">*/}
                {/*        <NavbarBrand>Incredible Thermomix</NavbarBrand>*/}
                {/*    </div>*/}
                {/*</Navbar>*/}
                {/*<Greet/>*/}
                {/*<h1>Famous Thermomix Things</h1>*/}
                {/*<Menu places={this.state.places}/>*/}

                {/*TODO: head cannot appear as a chiald of div*/}
                {/*<head>*/}
                {/*    <meta charSet="utf-8"/>*/}
                {/*    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>*/}

                {/*    <title>gătește ușor cu thermomix</title>*/}
                {/*    <meta content="" name="description"/>*/}
                {/*    <meta content="" name="keywords"/>*/}

                {/*    <link href="assets/img/favicon.png" rel="icon"/>*/}
                {/*    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>*/}
                {/*    /!*Google Forms*!/*/}
                {/*    <link*/}
                {/*        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"*/}
                {/*        rel="stylesheet"/>*/}

                {/*    <link href="assets/vendor/aos/aos.css" rel="stylesheet"/>*/}
                {/*    <link href="assets/vendor/bootstrap/css/bootstrap.min.css"*/}
                {/*          rel="stylesheet"/>*/}
                {/*    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css"*/}
                {/*          rel="stylesheet"/>*/}
                {/*    <link href="assets/vendor/boxicons/css/boxicons.min.css"*/}
                {/*          rel="stylesheet"/>*/}
                {/*    <link*/}
                {/*        href="assets/vendor/glightbox/css/glightbox.min.css"*/}
                {/*        rel="stylesheet"/>*/}
                {/*    <link href="assets/vendor/remixicon/remixicon.css"*/}
                {/*          rel="stylesheet"/>*/}
                {/*    <link*/}
                {/*        href="assets/vendor/swiper/swiper-bundle.min.css"*/}
                {/*        rel="stylesheet"/>*/}

                {/*    <link href="assets/css/style.css"*/}
                {/*          rel="stylesheet"/>*/}
                {/*</head>*/}

                <body>

                <header id="header" class="fixed-top">
                    <div class="container d-flex align-items-center justify-content-between">

                        <h1 class="logo"><a href="index.html">gătește ușor cu thermomix</a></h1>
                        {/*Uncomment below if you prefer to use an image logo -->*/}
                        {/*<a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->*/}

                        <nav id="navbar" class="navbar">
                            <ul>
                                <li><a class="nav-link scrollto active" href="#acasa">Acasă</a></li>
                                <li><a class="nav-link scrollto" href="#paste">Rețete de Paște</a></li>
                                <li><a class="nav-link scrollto" href="#colectii">Colecții Cookidoo</a></li>
                                <li><a class="nav-link scrollto" href="#about">Despre Thermomix</a></li>
                                <li><a class="nav-link scrollto" href="#services">Avantaje și dezavantaje</a></li>
                                <li><a class="nav-link scrollto" href="#functii">Funcții</a></li>
                                <li><a class="nav-link scrollto" href="#beneficii">Beneficii</a></li>
                                {/*<li><a class="nav-link scrollto" href="#contact">Contactează-mă</a></li>*/}
                            </ul>
                            <i class="bi bi-list mobile-nav-toggle"></i>
                        </nav>

                    </div>
                </header>

                <section id="acasa" class="d-flex align-items-center">
                    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
                        <div class="row justify-content-center">
                            <div class="col-xl-7 col-lg-9 text-center">
                                <h1>thermomix - aparat inteligent de gătire asistată</h1>
                                <h2>Cea mai mică bucătărie mobilă</h2>
                            </div>
                        </div>
                        <div class="text-center">
                            <a href="#about" class="btn-get-started scrollto">Începe explorarea</a>
                        </div>

                        <div class="row icon-boxes">
                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in"
                                 data-aos-delay="200">
                                <div class="icon-box">
                                    <div class="icon"><i class="ri-stack-line"></i></div>
                                    <h4 class="title"><a href="">24 în 1 funcții</a></h4>
                                    <p class="description">
                                        Thermomix economisește timp și bani! Câteva dintre ele sunt:</p>
                                    <li>Încălzește la temperatura controlată</li>
                                    <li>Pasare</li>
                                    <li>Mixare</li>
                                    <li>Gătire la abur</li>
                                    <li>Cantărire</li>
                                    <li>Emulsionare</li>
                                    <li>Măcinare</li>
                                    <li>și multe altele</li>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in"
                                 data-aos-delay="300">
                                <div class="icon-box">
                                    <div class="icon"><i class="ri-palette-line"></i></div>
                                    <h4 class="title"><a href="">Siguranță pentru rețete proprii</a></h4>
                                    <p class="description">Oferă viteză, siguranță, încredere și oportunitatea bsp;de a
                                        fi creativ.
                                        Bucătării și firmele de catering din toată lumea se bazează pe Thermomix
                                        deoarece economisește
                                        timp, efort și produce rezultate excelente.</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in"
                                 data-aos-delay="400">
                                <div class="icon-box">
                                    <div class="icon"><i class="ri-command-line"></i></div>
                                    <h4 class="title"><a href="">Conectat la internet</a></h4>
                                    <p class="description">Pe platforma/site-ul web Cookidoo găsim peste 68 000 de
                                        rețete
                                        din întreagă
                                        lume, rețetele pot fi vizualizate pe orice dispozitiv (telefon, tabletă, PC),
                                        dar și
                                        pe tabletă
                                        aparatului.</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in"
                                 data-aos-delay="500">
                                <div class="icon-box">
                                    <div class="icon"><i class="ri-fingerprint-line"></i></div>
                                    <h4 class="title"><a href="">Planifică meniu și creează listă de cumpărături</a>
                                    </h4>
                                    <p class="description">Platforma de retete Cookidoo ne permite sa cream o lista de
                                        cumparaturi
                                        pentru toate retetele pe care vrem sa le gatim pe o anumita perioada. In cazul
                                        in
                                        care un
                                        ingredient se repede, cantitatile se vor aduna. Lista de cumparaturi poate sa
                                        fie
                                        printata, trimisa pe email, sau putem folosi telefonul la cumparaturi pentru a
                                        sterge de pe
                                        lista ingredientele cumparate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="paste" class="services section-bg">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">
                            <h3>Cozonac</h3>
                            <h4>
                                <p>Rețeta în limba spaniolă de pe Cookidoo</p>
                                <p><a href="https://cookidoo.international/recipes/recipe/en/r595534">Link Cookidoo Pan
                                    de
                                    Pascua Cozonac (Kozunak)</a></p>
                            </h4>
                            <p>Timp de preparare 30 min</p>
                            <p>Timp total 5h (îl include pe cel de preparare)</p>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="100">
                                <div class="icon-box iconbox-blue">
                                    <div class="icon">
                                        {/*// <!--                            <svg width="100" height="100" viewBox="0 0 600 600"-->*/}
                                        {/*// <!--                                 xmlns="http://www.w3.org/2000/svg">-->*/}
                                        {/*// <!--                                <path stroke="none" stroke-width="0" fill="#f5f5f5"-->*/}
                                        {/*// <!--                                      d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>-->*/}
                                        {/*// <!--                            </svg>-->*/}
                                        <img src="assets/img/cozonac.png" class="img-fluid" alt=""/>
                                        <i class="bx bxl-dribbble">Ingrediente</i>
                                    </div>
                                    <p>Aluat</p>
                                    <p> 125g zahăr</p>
                                    <p> 4 coajă de lămâie, după gust</p>
                                    <p> 4 coajă de portocală, după gust</p>
                                    <p> 250g lapte</p>
                                    <p> 20 g drojdie proaspătă presată, mărunțită</p>
                                    <p> 520 g de făînă</p>
                                    <p> 5 gălbenușuri</p>
                                    <p> ½ linguriță de sare</p>
                                    <p> 100 g unt</p>
                                    <p> 1 lingură untură</p>
                                    <p> 1 linguriță vanilie lichidă</p>
                                    <p> 5 lingurițe ulei de floarea soarelui</p>
                                    <br/>
                                    <p> Umplutură</p>
                                    <p> 5 albușuri</p>
                                    <p> 1 vârf de sare</p>
                                    <p> 200 g nuci</p>
                                    <p> 40 g praf de cacao pur</p>
                                    <p> 70g zahăr</p>
                                    <p> 15 g rom</p>
                                    <br/>
                                    <p> Decorare</p>
                                    <p> 2 lingurițe de ulei de floarea soarelui</p>
                                    <p> 1 ou bătut</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
                                 data-aos-delay="100">
                                <div class="icon-box iconbox-yellow">
                                    {/*//                        <div class="icon">-->*/}
                                    {/*// -                            <svg width="100" height="100" viewBox="0 0 600 600"-->*/}
                                    {/*//                                  xmlns="http://www.w3.org/2000/svg">-->*/}
                                    {/*//                                 <path stroke="none" stroke-width="0" fill="#f5f5f5"-->*/}
                                    {/*//                                       d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>-->*/}
                                    {/*//                            </svg>-->*/}
                                    {/*//                             <i class="bx bx-layer"></i>-->*/}
                                    {/*//                         </div>-->*/}
                                    <div class="icon">
                                        <img src="assets/img/cozonac.png" class="img-fluid" alt=""/>
                                        <i class="bx bxl-dribbble">Pregătire aluat</i>
                                    </div>
                                    <p>1. Puneți în bolul de mixare: 120g zahăr, coajă de portocală și lămâie și
                                        pulverizați 30
                                        sec / viteză 10. Scoateți pulberea în un castron și puneți-o deoparte.</p>
                                    <p>2. Puneți laptele în bolul de mixare și activați funcția de încălzire pe TM6 la
                                        50 de
                                        grade, sau încălziți 2 min / 50 ° C / viteză 1 pe alte modele (TM5/TM31).</p>
                                    <p>3. Pentru maia așezați un castron pe capac, cântăriți drojdia mărunțită, 5 g
                                        zahăr și 20
                                        g făînă. Puneți în bolul de mixare 50 g de laptele încălzit la pasul 2 și
                                        adăugați-l în
                                        castron. Se amestecă bine cu o linguriță până când este cremoasă și netedă și se
                                        lasă să
                                        dubleze volumul. Între timp, continuați cu rețeta.</p>
                                    <p>4. Puneți gălbenușurile cu sarea într-un alt vas, bateți ușor și puneți de-o
                                        parte.</p>
                                    <p>5. Adăugați untul, untură de porc și esență de vanilie în vasul de amestecare și
                                        activați
                                        funcția de încălzire pe TM6 la 50 de grade, sau încălziți 2 min / 50 ° C /
                                        viteză 2 pe
                                        alte modele (TM5/TM31).</p>
                                    <p>6. Se amestecă zahărul aromat, făina, amestecul de maia și gălbenușurile bătute
                                        cu sare
                                        și se amestecă 15 sec / viteză 6.</p>
                                    <p>7. Framantati 6 min /spic și adăugați 1 linguriță de ulei prin deschiderea
                                        capacului din
                                        minut în minut. Asezați aluatul de pe suprafața de lucru ușor uns cu ulei,
                                        frământați și
                                        formăți o bilă netedă. Așezați-l într-un vas mare uns, acoperiți cu folie de
                                        plastic și
                                        lăsăți-l să se odihnească timp de 1 oră în cuptor, oprit și cu lumina
                                        aprinsă/cuptorul
                                        setat pe 40 de grade 25 de minute.</p>
                                    <p>8. Luați aluatul pe o parte, ridicați-l, lăsându-l să se întindă și pliați-l pe
                                        sine.
                                        Întoarceți vasul la 90 °, repetați faldul și lăsăți-l să se odihnească 10
                                        minute.
                                        Repetați răsucirea și pliați încă de 2 ori. Așezați aluatul în castron,
                                        acoperiți cu
                                        folie alimentară și lăsăți-l să se odihnească timp de 30 de minute. Între timp,
                                        spălați
                                        bolul de mixare și faceți umplutură.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
                                 data-aos-delay="100">
                                <div class="icon-box iconbox-yellow">
                                    <div class="icon">
                                        <img src="assets/img/cozonac.png" class="img-fluid" alt=""/>
                                        <i class="bx bxl-dribbble">Pregătire umplutură</i>
                                    </div>

                                    <p>9. Așezați fluturașul de batere în bolul de mixare. Puneți alburile și sarea în
                                        bol și
                                        mixati 4 min / viteză 3,5. Scoateți într-un castron și puneți de-o parte.
                                        Scoateți
                                        fluturele de amestecare.</p>
                                    <p>10. Așezați nucile, cacao și zahărul în bolul de amestecare și amestecăți 5 sec /
                                        viteză
                                        7. Cu ajutorul spatulei curățați pereții bolului de mixare.</p>
                                    <p>12. Adăugați rom și albușurile și amestecăți 15 sec / viteză 3. Scoateți în vasul
                                        de
                                        amestecare, terminați de amestecat cu spatulă și puneți-l deoparte.</p>

                                    <p>Asamblare și coacere</p>
                                    <p>Scoateți aluatul de pe suprafața de lucru ușor unsă, aplatizați-l cu mâinile și
                                        tăiați-l
                                        în jumătate. Aplatizați una dintre părți cu mâinile, formând un dreptunghi de
                                        aprox.
                                        35x20 cm. Întindeți suprafața cu jumătate din umplutură, într-un strat de 3 cm
                                        pe una
                                        dintre cele mai lungi părți. Rulați aluatul începând din centru și sigilați bine
                                        capetele. Repetați procesul cu cealaltă jumătate. Așezați pe hârtia de copt cele
                                        două
                                        role în formă de X. Treceți de 2 ori cei 2 cilindri de fiecare parte,
                                        schimbându-i cu
                                        mâna, formând un fel de împletitură și, la final, puneți capetele sub aluat.
                                        Folosind
                                        hârtia, așezați aluatul într-o formă de tort de 2 litri tapetată cu hârtie de
                                        copt,
                                        vopsiți cu ou bătut și lăsăți-l să se odihnească 45 de minute sau până la
                                        dublarea
                                        volumului.</p>
                                    <p>Preîncălziți cuptorul la 160 ° C.</p>
                                    <p>Coaceți timp de 10 minute la 160 ° C, ridicați temperatura la 170 ° C și coaceți
                                        încă 30
                                        de minute. Scoateți din cuptor, lăsăți să stea 15 minute și desfaceți din tavă.
                                        Se lasă
                                        să se răcească complet și se servesc felii.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="colectii" class="services section-bg">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title">

                            <div class="section-title">
                                <h3>Ultima colecție Cookidoo </h3>
                                <p>în limba romana 🇷🇴</p>
                                <p><a href="https://cookidoo.international/collection/en/p/col433928">Link Cookidoo
                                    Modul
                                    Fierbere orez</a></p>
                                <p>Rețete cu timp total de 35 min în medie</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-md-8 d-flex align-items-stretch" data-aos="zoom-in"
                                     data-aos-delay="100">
                                    <div class="icon-box iconbox-blue">
                                        <div class="icon">
                                            <img src="assets/img/orez.png" class="img-fluid" alt=""/>
                                            <i class="bx bxl-dribbble">Orez</i>
                                        </div>
                                        <br/>
                                        <p>Cu modul Fierbere orez, Thermomixul® tău înlocuiește încă un aparat de
                                            bucătărie.
                                        </p>
                                        <p>Folosește aceste rețete de bază pentru a fierbe perfect orezul și alte
                                            cereale, pe
                                            care să le servești ca
                                            garnitură sau să le amesteci într-o salată.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <main id="main">

                    <section id="about" class="about">
                        <div class="container" data-aos="fade-up">

                            <div class="section-title">
                                <h2>Despre Thermomix</h2>
                                <p>Aparat inteligent de gatire asistata Thermomix TM6 - ultima generatie de Thermomix,
                                    un aparat
                                    ce se
                                    produce din 1971</p>
                                <p>A 6-a generație de Thermomix este adaptată la era digitală, un gadget care se
                                    conectează la
                                    rețeaua
                                    de internet, dar poate fi folosit și fără această conexiune. </p>
                            </div>

                            <div class="row content">
                                <div class="col-lg-6">
                                    <p>
                                        El include un ecran tactil (Touch Screen) color cu o diagonală de 17 cm, funcții
                                        automate și
                                        gătire asistată. Versiunea anterioară a fost îmbunătățită și pe partea de sunet,
                                        TM6
                                        fiind și
                                        mai silențios.
                                    </p>
                                    <ul>
                                        <li><i class="ri-check-double-line"></i>Încălzește la temperatura controlată
                                        </li>
                                        <li><i class="ri-check-double-line"></i>Pasare</li>
                                        <li><i class="ri-check-double-line"></i>Mixare</li>
                                        <li><i class="ri-check-double-line"></i>Gătire la abur</li>
                                        <li><i class="ri-check-double-line"></i>Cantărire</li>
                                        <li><i class="ri-check-double-line"></i>Emulsionare</li>
                                        <li><i class="ri-check-double-line"></i>Măcinare</li>
                                        <li><i class="ri-check-double-line"></i>Cântărire</li>
                                        <li><i class="ri-check-double-line"></i>Amestecare</li>
                                        <li><i class="ri-check-double-line"></i>Bate spume si creme</li>
                                        <li><i class="ri-check-double-line"></i>Mărunțire</li>
                                        <li><i class="ri-check-double-line"></i>Încălzește la temperatura controlată
                                        </li>
                                        <li><i class="ri-check-double-line"></i>Gătire</li>
                                        <li><i class="ri-check-double-line"></i>Gătire lentă (slow cook)</li>
                                        <li><i class="ri-check-double-line"></i>Fermentare</li>
                                        <li><i class="ri-check-double-line"></i>Fierbere</li>
                                        <li><i class="ri-check-double-line"></i>Caramelizare</li>
                                        <li><i class="ri-check-double-line"></i>Prăjire</li>
                                        <li><i class="ri-check-double-line"></i>Sous-vide</li>
                                        <li><i class="ri-check-double-line"></i>Rice-cooker</li>
                                        <li><i class="ri-check-double-line"></i>Îngroșare</li>
                                        <li><i class="ri-check-double-line"></i>Rumenire</li>
                                        <li><i class="ri-check-double-line"></i>Auto-curățare</li>

                                    </ul>
                                </div>
                                <div class="col-lg-6 pt-4 pt-lg-0">
                                    <p>Grupul german Vorwerk este pioner in inovatie, asa ca acest aparat conduce pas cu
                                        pas
                                        spre o
                                        reusita sigura in bucatarie, cu ajutorul functiei de
                                        gatire
                                        asistata si a pasilor din reteta afisati pe ecran. Tot ce ramane de facut este
                                        sa
                                        adaugati
                                        ingredientele
                                        sui sa porniti aparatul. Thermomix® are deja setata temperatura si timpul,
                                        parametrii
                                        stabiliti
                                        de
                                        persoane avizate si retetele sunt certificate de grupul nemtesc, Vorwerk. Este o
                                        alternativa
                                        simpla si
                                        rapida, care vine in completarea posibilitatii de folosire in modul manual, cand
                                        putem
                                        sa gatim
                                        retetele
                                        proprii.&nbsp;</p>

                                    <p>Modelul&nbsp;<strong>TM6</strong> este
                                        complet digital si este dotat cu un buton selector unic.
                                        Ce include acest aparat?
                                        - modulul principal cu locasul special pentru bolul de mixare, un orificiu care
                                        asigura
                                        evacuarea
                                        eficienta a lichidelor pe blatul de lucru (in caz de accidente, cand aparatul e
                                        folosit
                                        pe modul
                                        manual), un dispozitiv care detecteaza prezenta capacului bolului e mixare, in
                                        asa fel
                                        incat
                                        aparatul sa
                                        nu porneasca fara prezenta capacului si manerele automate care prind capacul
                                        bolului de
                                        mixare
                                        (o masura
                                        de siguranta prezenta de la modelul anterior)
                                        - un bol de mixare care poate permite gatirea la temperaturi ridicate - 160 de
                                        grade
                                        dotat cu un
                                        cutit
                                        care se invarte in ambele sensuri ale ceasornicului. Modul anti-orar fiind
                                        recomandat
                                        pentru
                                        fierberea
                                        de paste, gemuri, mamaliga si alte amestecari delicate.
                                        - un capac bol de mixare
                                        - un pahar de masurare care nu inchide etans bolul de mixare, Thermomix neavand
                                        functia
                                        de oala
                                        sub
                                        presiune. Acesta permite ridicarea capacului si functioneaza ca o cana gradata,
                                        putand
                                        sa luam
                                        in calcul
                                        densitatea lichidelor atunci cand vrem sa masuram lichide in mililitrii si nu in
                                        grame,
                                        asa cum
                                        masoara
                                        Thermomix toate ingredientele, inclusiv lichidele. Capacul de masurare este
                                        convex si
                                        impreuna
                                        cu
                                        paharul de masurare permite emulsionarea, de exemplu putem sa punem pe capac
                                        ulei ca sa
                                        facem
                                        maioneza,
                                        uleiul picurand treptat in interiorul bolului de mixare.
                                        - un capac anti-strop care se aseaza deasupra capacului bolului de mixare
                                        folosit pentru
                                        rumenire,
                                        gemuri, dar si de fiecare data cand ne cere reteta.
                                        - un fluturas de batere - pentru batut spuma, el asigurand functia de tel
                                        - un cos de inabusire care permite gatirea la abur a orezului, quinoa, linte,
                                        legume,
                                        dar are si
                                        functie
                                        de strecurator si poate ajuta la spalarea delicata a capsunelor/fructelor de
                                        padure
                                        - o spatula cu un guler care permite sa fie introdusa prin orificiul capacului
                                        bolului
                                        de
                                        mixare, astfel
                                        impingand inghetata spre cutite. Spatula se ataseaza cosului de inabusire,
                                        permitand sa
                                        scoatem
                                        cosul de
                                        inabusire incins, astfel obtinand o strecuratoare cu maner.
                                        - o tava Varoma (vapori + aroma) care include un recipient generos in care putem
                                        sa
                                        gatim la
                                        abur legume
                                        voluminoase (broccoli, conopida, vinete, bucati de dovleac), sau o pulpa de
                                        curcan si o
                                        tavita
                                        mai mica
                                        unde putem gati la abur un file de peste, bucati de pui, sau legume mai putin
                                        voluminoase.

                                    </p>
                                    <p>TM6 include o gama mai larga de viteze si temperaturi (de la 37 la 160 grade) si
                                        functia
                                        Turbo
                                        reglabila
                                        intre 0,5 si 2 secunde. Atat bolul cat si Varoma sunt cu 10% mai mari (2,2 si
                                        3,3 litri)
                                        fata de
                                        modelul mai vechi, lansat in 2004, TM31.</p>
                                    <p>Deasemenea, asigura un mai bun control al temperaturilor de gatire, permitand
                                        ajustarea
                                        temperaturii de
                                        gatire la intervale de&nbsp;1°Celsius.</p>
                                    <p>Afiseaza atat temperatura de gatire cat si temperatura reziduala.</p>
                                    <p><strong>Thermomix</strong>&nbsp;economiseste timp si bani!</p>
                                    <a href="#functii" class="btn-learn-more">Află mai multe</a>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/*<!-- ======= Counts Section ======= -->*/}
                    {/*<!--    <section id="counts" class="counts section-bg">-->*/}
                    {/*<!--        <div class="container">-->*/}

                    {/*<!--            <div class="row justify-content-end">-->*/}

                    {/*<!--                <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">-->*/}
                    {/*<!--                    <div class="count-box">-->*/}
                    {/*<!--                        <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2"-->*/}
                    {/*<!--                              class="purecounter"></span>-->*/}
                    {/*<!--                        <p>Happy Clients</p>-->*/}
                    {/*<!--                    </div>-->*/}
                    {/*<!--                </div>-->*/}

                    {/*<!--                <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">-->*/}
                    {/*<!--                    <div class="count-box">-->*/}
                    {/*<!--                        <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2"-->*/}
                    {/*<!--                              class="purecounter"></span>-->*/}
                    {/*<!--                        <p>Projects</p>-->*/}
                    {/*<!--                    </div>-->*/}
                    {/*<!--                </div>-->*/}

                    {/*<!--                <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">-->*/}
                    {/*<!--                    <div class="count-box">-->*/}
                    {/*<!--                        <span data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="2"-->*/}
                    {/*<!--                              class="purecounter"></span>-->*/}
                    {/*<!--                        <p>Years of experience</p>-->*/}
                    {/*<!--                    </div>-->*/}
                    {/*<!--                </div>-->*/}

                    {/*<!--                <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">-->*/}
                    {/*<!--                    <div class="count-box">-->*/}
                    {/*<!--                        <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="2"-->*/}
                    {/*<!--                              class="purecounter"></span>-->*/}
                    {/*<!--                        <p>Awards</p>-->*/}
                    {/*<!--                    </div>-->*/}
                    {/*<!--                </div>-->*/}

                    {/*<!--            </div>-->*/}

                    {/*<!--        </div>-->*/}
                    {/*<!--    </section>&lt;!&ndash; End Counts Section &ndash;&gt;-->*/}

                    <section id="beneficii" class="about-video">
                        <div class="container" data-aos="fade-up">

                            <div class="row">

                                <div class="col-lg-6 video-box align-self-baseline" data-aos="fade-right"
                                     data-aos-delay="100">
                                    <img src="assets/img/about-video.jpg" class="img-fluid" alt=""
                                         href="https://youtu.be/q88mORoO8Hk" class="glightbox play-btn mb-4"
                                         data-vbtype="video" data-autoplay="true"
                                    />
                                </div>

                                <div class="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                                    <h3>De ce apreciez eu acest aparat?</h3>
                                    <p class="fst-italic">
                                        3 dintre beneficiile lui Thermomix 6

                                    </p>
                                    <p>
                                        Cum poate acest aparat inteligent de gatire asistata sa te ajute?
                                    </p>
                                    <ul>
                                        <li><i class="bx bx-check-double"></i> Rapid și fără stres
                                            <p>Thermomix Te ajuta sa prepari rapid și fără stres aproape orice fel de
                                                mancare,
                                                de la bauturi (smoothie, limonada, cocktail-uri, ciocolata calda si
                                                multe
                                                altele), pana la antreuri, salate, paine, deserturi, dar si meniuri
                                                complete cu
                                                supa si felul principal.</p>
                                        </li>
                                        <li><i class="bx bx-check-double"></i> Diversitate
                                            <p>Te poți inspira din miile de retete de pe platforma Cookidoo, retete din
                                                toate
                                                bucatariile lumii, pe care le poti modifica dupa propriul tau gust</p>
                                        </li>
                                        <li><i class="bx bx-check-double"></i> Multitudine de funcții
                                            <p>Te poate sprijini sa iti inovezi felul de a gati alături de multitudinea
                                                lui de
                                                funcții, cele mai recente fiind gatirea lenta/ slow cooking si gatirea
                                                in pungi
                                                vidate, sau sous vide</p>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div>
                    </section>

                    {/*<!-- ======= Clients Section ======= -->*/}
                    {/*<!--    <section id="clients" class="clients section-bg">-->*/}
                    {/*<!--        <div class="container">-->*/}

                    {/*<!--            <div class="row">-->*/}

                    {/*<!--                <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"-->*/}
                    {/*<!--                     data-aos="zoom-in">-->*/}
                    {/*<!--                    <img src="assets/img/clients/client-1.png" class="img-fluid" alt="">-->*/}
                    {/*<!--                </div>-->*/}

                    {/*<!--                <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"-->*/}
                    {/*<!--                     data-aos="zoom-in">-->*/}
                    {/*<!--                    <img src="assets/img/clients/client-2.png" class="img-fluid" alt="">-->*/}
                    {/*<!--                </div>-->*/}

                    {/*<!--                <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"-->*/}
                    {/*<!--                     data-aos="zoom-in">-->*/}
                    {/*<!--                    <img src="assets/img/clients/client-3.png" class="img-fluid" alt="">-->*/}
                    {/*<!--                </div>-->*/}

                    {/*<!--                <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"-->*/}
                    {/*<!--                     data-aos="zoom-in">-->*/}
                    {/*<!--                    <img src="assets/img/clients/client-4.png" class="img-fluid" alt="">-->*/}
                    {/*<!--                </div>-->*/}

                    {/*<!--                <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"-->*/}
                    {/*<!--                     data-aos="zoom-in">-->*/}
                    {/*<!--                    <img src="assets/img/clients/client-5.png" class="img-fluid" alt="">-->*/}
                    {/*<!--                </div>-->*/}

                    {/*<!--                <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"-->*/}
                    {/*<!--                     data-aos="zoom-in">-->*/}
                    {/*<!--                    <img src="assets/img/clients/client-6.png" class="img-fluid" alt="">-->*/}
                    {/*<!--                </div>-->*/}

                    {/*<!--            </div>-->*/}

                    {/*<!--        </div>-->*/}
                    {/*<!--    </section>&lt;!&ndash; End Clients Section &ndash;&gt;-->*/}

                    <section id="functii" class="testimonials">
                        <div class="container" data-aos="fade-up">

                            <div class="section-title">
                                <h2>Funcții</h2>
                                <p>Thermomix are 22 de functii in momentul de fata, dar numarul lor creste pentru ca
                                    aparatul
                                    este
                                    conectat la internet. Ultima functie importanta adaugata este cea de fierbator de
                                    oua.</p>
                            </div>

                            <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                                <div class="swiper-wrapper">

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Obtine textura matasoasa perfecta a unui smoothie sanatos, o supa crema
                                                sau
                                                prepara
                                                cocktailuri.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Pasare</h3>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Thermomix ® este unul din cele mai performante si puternice mixere pe
                                                care le-aţi putea avea: clatite perfecte sau budinca Yorkshire intr-un
                                                timp
                                                extrem de
                                                scurt,
                                                compozitii de baza pentru prajituri, biscuiti, patisserie, creme
                                                tartinabile sau
                                                iaurturi.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            {/*<img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img"*/}
                                            {/*     alt="">-->*/}
                                            <h3>Mixare</h3>
                                            <h4>+ aerare</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Gatirea la aburi este foarte simpla gratie accesoriului Varoma care se
                                                potriveste
                                                perfect pe
                                                capacul bolului de mixare. Alimentele se gatesc la aburi in timp ce
                                                preparati
                                                altceva în
                                                bolul de mixare.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Gatire la abur</h3>
                                            <h4>pe cel mult 4 etaje</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Cu ajutorul cantarului integrat in acest robot de bucatarie, puteti
                                                cantari
                                                orice
                                                ingredient
                                                direct in bolul de mixare. E suficient sa readuceti cantarul la 0
                                                folosind
                                                funcţia Tara,
                                                pentru a putea cantari ingredientele pe masura ce se adauga in bol. Cu
                                                noul
                                                THERMOMIX
                                                TM6,
                                                puteti cantari chiar in timp ce aparatul amesteca sau gateste cu viteza
                                                mica,
                                                deci cu
                                                motorul în funcţiune.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Cantarire</h3>
                                            <h4> Precizie de 1 gram</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Cu Thermomix®, e foarte simplu si usor sa preparati singuri maioneza si
                                                dressing-urile
                                                pentru salate.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Emulsionare</h3>
                                            <h4>Maioneza</h4>
                                        </div>
                                    </div>


                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Puteţi macina faina din diferite cereale, cafea la granulaţia dorita,
                                                puteti
                                                rade
                                                parmezanul
                                                si puteţi obtine maximum de aroma, maruntind ierburile aromatice si
                                                macinand
                                                condimente.
                                                Cuburile de gheata pot fi zdrobite in cateva secunde. Chiar si seminţele
                                                marunte
                                                - cum
                                                sunt
                                                cele de mac sau de susan - se pot macina extrem de usor si de repede.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Macinare</h3>
                                            <h4>Faina</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Datorita inteligentei Thermomix ®, cutitul se va roti continuu si,
                                                astfel,
                                                continutul
                                                bolului se va incalzi uniform. Reglati, pur si simplu, Thermomix ® la
                                                viteza cea
                                                mai
                                                mica si
                                                mancarea se va amesteca delicat in timp ce se gateste. Este un mod
                                                minunat de a
                                                ajunge
                                                la
                                                rezultatele asteptate atunci cand gatiti mamaliga, un risotto, o budinca
                                                de
                                                orez, o
                                                crema sau un sos
                                                delicat cum este&nbsp;<em>sosul béchamel.</em>
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            {/*<img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img"-->*/}
                                            {/*alt="">-->*/}
                                            <h3>Amestecare</h3>
                                            <h4>Mamaliga</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Cu ajutorul fluturelui de amestecare, puteti bate frisca usor si rapid,
                                                iar
                                                albusurile
                                                se
                                                pot transforma intr-o spuma bogata si matasoasa. E suficient sa montaţi
                                                fluturele de
                                                amestecare pe cutit si reglati o viteza moderata, intre 2 si 4. Viteza 4
                                                fiind
                                                si
                                                maximul la care trebuie folosit acest accesoriu.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Batere spume si creme</h3>
                                            <h4>Frisca</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Robotul de bucatarie THERMOMIX TM6 toaca ceapa, nuci, verdeata, carne,
                                                morcovi,
                                                cartofi
                                                si
                                                multe altele. Selectati viteza doritt, dupa cum vreti ca ingredientele
                                                sa fie
                                                tocate
                                                grosier
                                                sau mai fin. Puteti marunti si o cantitate foarte mica de ingrediente. O
                                                singura
                                                ceapa,
                                                de
                                                exemplu, poate fi tocata în doar 3 secunde!
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Maruntire</h3>
                                            <h4>Toaca</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Datorita acestei functii, puteti obtine cu precizie orice preparat.
                                                Senzorii
                                                integrati
                                                in
                                                bolul de mixare vor mentine temperatura la valoarea dorita. Thermomix ®
                                                poate
                                                încalzi
                                                continutul bolului la temperaturi cuprinse între 37°C şi 160°C.
                                                Controlul
                                                temperaturii
                                                este
                                                asigurat de selectorul de temperatura si prin afisarea temperaturii
                                                exacte pe
                                                ecranul
                                                tactil. Perfect pentru retete delicate cum sunt budincile-crema, sau
                                                pentru
                                                topit
                                                ciocolata
                                                fara sa se taie, dar si pentru prajire. Iar laptele nu va mai fierbe
                                                niciodată
                                                prea
                                                mult,
                                                pentru ca veţi regla temperatura la 90°C.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Incalzestire</h3>
                                            <h4> la temperatura controlata</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Thermomix ® gateste cu precizie, pentru rezultate perfecte de fiecare
                                                data. Spre
                                                deosebire
                                                de o plita traditionala, Thermomix® asigura o temperatura constanta si
                                                exacta,
                                                care se
                                                poate
                                                regla automat, foarte usor, cu ajutorul selectorului de temperatura si a
                                                ecranului
                                                tactil.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Gatire</h3>
                                            <h4> cu precizie</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Functia de framantare reproduce miscarile de manuale ale brutarului
                                                profesionist, cu
                                                rotatia
                                                alternativa a cutitului, in sensul acelor de ceasornic si in sens invers
                                                acelor
                                                de
                                                ceasornic. Aluaturile devin suple si fine: aluaturi dospite - de paine,
                                                pizza -
                                                ori
                                                aluaturi
                                                pentru paste, biscuiti si chiar pentru produse de patiserie si
                                                briose.&nbsp;
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Framantare</h3>
                                            <h4>Aluat de cozonac</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Intre 1 si 8 ore la temperatura joasa (70 - 98°C). Se adauga suficient
                                                lichid,
                                                cum ar fi
                                                fond sau sos, cat sa acopere ingredientele si se amesteca cu spatula. Se
                                                selecteaza
                                                timpul
                                                si temperature (in functie de reteta) si se porneste modul Slow Cook.
                                                Thermomix
                                                va gati
                                                ingredientele astfel incat sa fui fragede si suculente. Perfect pentru
                                                carnea
                                                tare (max.
                                                800g).&nbsp;
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Gatire lenta</h3>
                                            <h4>Slow cook</h4>
                                        </div>
                                    </div>


                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Pentru iaurt, branzeturi sau aluaturi in vasul Varoma. Timpulul se poate
                                                regal
                                                pana la
                                                12
                                                ore, cu temperature intre 37 si 70°C. Temperatura constanta ajuta si la
                                                fermentarea
                                                direct
                                                in bolul de mixare sau la crearea unei atmosphere calde in vasul Varoma
                                                plasat
                                                deasupra
                                                apei
                                                din bolul de mixare.&nbsp;
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Fermentare</h3>
                                            <h4>Iaurt</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Se foloseste pentru a incalzi apa pentru ceai sau pentru a fierbe paste
                                                fainoase. Se
                                                alege
                                                temperatura, iar Thermomix o va incalzi cu precizie anuntand cand este
                                                gata.
                                                Pentru ceai
                                                alb
                                                sau verde se recomanda o temperatura de 80°C, pentru ceai negru la 98°C.
                                                pentru
                                                paste se
                                                recomanda 100°C.&nbsp;
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Fierbere</h3>
                                            <h4>temperatura potrivita</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Pentru zahar caramelizat. In functie de temperatura se obtine sirop de
                                                zahar de
                                                diferite
                                                intensitati (pentru fudge, caramel, nougat, simit, toffee), caramel
                                                lichid.&nbsp;
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Caramelizare</h3>
                                            <h4>Deserturi</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Ceapa prajita la temperatura ridicata in jumatate din timpul obisnuit.
                                                Savoarea
                                                este
                                                imbunatatita, iar culoare este brun-aurie.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Prajire</h3>
                                            <h4>Ceapa</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Carne, peste, legume si fructe, gatite in pungi vidati de la 0 la 12
                                                ore, la
                                                temperaturi
                                                intre 37 - 98°C pentru fragezime si suculenta.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Sous-vide</h3>
                                            <h4>Temperatura joasa, in pungi vidate</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Orez perfect gatit! Se intoduce orezul in bolul de mixare, se adauga apa
                                                si
                                                mirodenii.
                                                Se
                                                selecteaza modul Rice-cooker si se apasa start. Temperature si timpul de
                                                gatire
                                                sunt
                                                controlate automat.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Rice-cooker</h3>
                                            <h4>Orez cremos</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Se pot rumeni legume si bucati de carne.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Rumenire</h3>
                                            <h4>Temperatura maxima de 160 de grade</h4>
                                        </div>
                                    </div>


                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Dupa utilizare, in bol se adauga apa si un strop de detergent lichid. Se
                                                selecteaza una
                                                dintre cele 4 optiuni legate de tipul de murdarire: aluat, universal,
                                                grasime si
                                                rumenire.
                                                Thermomix va detecta cat de murder este bolul si-l va curata in
                                                consecinta
                                                printr-o
                                                incalzire mai lunga daca, de exemplu, daca s-a folosit
                                                pentru caramel va urma o precuratare de cel putin 15 minute.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Auto-curatare</h3>
                                            <h4>sau prespalare</h4>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Thermomix tempereaza ciocolata la exact 37°C si poate sa incalzeasca la
                                                temperatura
                                                perfecta si mancarea pentru bebelusi.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <h3>Temperatura joasa</h3>
                                            <h4>Thermomix incalzeste mancarea pentru bebelusi la exact 37°C.</h4>
                                        </div>
                                    </div>

                                </div>
                                <div class="swiper-pagination"></div>
                            </div>

                        </div>
                    </section>

                    <section id="services" class="services section-bg">
                        <div class="container" data-aos="fade-up">

                            <div class="section-title">
                                <h2>Avantaje și dezavantaje</h2>
                                <p>Thermomix eeconomieste un aparat esențial în bucătăria multor oameni.</p>
                                <p>Femeile care il folosesc, termomixistele, sunt mândre și entuziasmate de acest aparat
                                    inteligent de gatire
                                    asistata, până la punctul în care fac orice fel de mâncare cu el. El reprezinta, mai
                                    presus
                                    de toate, mântuirea
                                    celor care nu au reușit niciodată să prăjească un ou prăjit. Trebuie doar să
                                    introduceți
                                    ingredientele, să le
                                    urmați instrucțiunile și <strong>oricine este capabil să facă un fel de mâncare
                                        decent</strong> , oricât de
                                    complex este.
                                    Dar care este succesul acestui aparat inteligent de gatire asistata in bucătărie?
                                    Principalul său avantaj este că este un aliat perfect, atât pentru cei care știu să
                                    gătească, cât și pentru cei
                                    care nu au făcut-o niciodată. Deși este capabil să pregătească tot felul de rețete,
                                    există
                                    unele pe care le face
                                    mai bine decât altele. Indiferent cât de mult ai fi un fan, nu toate sunt avantaje
                                    atunci
                                    când gătești
                                    cu Thermomix , deoarece are și dezavantajele sale.</p>.
                            </div>

                            <div class="row">
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in"
                                     data-aos-delay="100">
                                    <div class="icon-box iconbox-blue">
                                        <div class="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                                      d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                                            </svg>
                                            <i class="bx bxl-dribbble"></i>
                                        </div>
                                        <h4><a href="">Economie de timp</a></h4>
                                        <p>Știm cu toții că gătitul necesită să petrecem o parte importantă a timpului
                                            nostru,
                                            pentru unele feluri de
                                            mâncare mai mult decât pentru altele. Există rețete pe care am vrea să le
                                            facem și
                                            din cauza lipsei de timp
                                            nu
                                            ajungem niciodată să le pregătim. Pregătirea alimentelor este mult mai
                                            rapidă atunci
                                            când o faceți cu acest
                                            robot, mai ales că, odată ce toate ingredientele sunt introduse, mașina este
                                            responsabilă pentru finisarea
                                            acesteia, fără a fi nevoie să fiți în așteptarea amestecării, testării și
                                            modificării punctului de sare. Îl
                                            programați și vă puteți ocupa de a face alte lucruri. În acest fel, nu
                                            trebuie să vă
                                            faceți griji cu privire
                                            la
                                            arderea alimentelor.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                                     data-aos="zoom-in"
                                     data-aos-delay="200">
                                    <div class="icon-box iconbox-orange ">
                                        <div class="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                                      d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                                            </svg>
                                            <i class="bx bx-file"></i>
                                        </div>
                                        <h4><a href="">Începătorii pot face rețete complexe</a></h4>
                                        <p>Există tocănițe și rețete pe care nu ai fi îndrăznit niciodată să le
                                            prepari. <strong>Cu Thermomix nu contează
                                                dacă nu aveți experiență de gătit</strong> și că sunteți un adevărat
                                            dezastru
                                            pregătind orice fel de mâncare,
                                            este conceput astfel încât să puteți face orice rețetă, oricât de complicată
                                            ar fi.
                                            Și, de asemenea, astfel
                                            încât să iasă așa cum o vedeți în fotografie. Trebuie doar să urmați fiecare
                                            pas pe
                                            măsură ce îl marcați. Fie că
                                            gătește, gătește sau prepară mâncăruri tradiționale, începătorii au
                                            posibilitatea de
                                            a face rețete complexe. Pe
                                            lângă shake-uri sănătoase, pot fi preparate preparate elaborate și rețete
                                            mai
                                            specifice pentru cei alergici la
                                            gluten sau lactoză.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                                     data-aos="zoom-in"
                                     data-aos-delay="300">
                                    <div class="icon-box iconbox-pink">
                                        <div class="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                                      d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                                            </svg>
                                            <i class="bx bx-tachometer"></i>
                                        </div>
                                        <h4><a href="">Diversitate de retete</a></h4>
                                        <p>Pe platforma/site-ul web Cookidoo găsim peste 68 000 de rețete din întreagă
                                            lume,
                                            rețetele
                                            pot fi vizualizate pe orice dispozitiv (telefon, tabletă, PC), dar și pe
                                            tabletă
                                            aparatului.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
                                     data-aos-delay="100">
                                    <div class="icon-box iconbox-yellow">
                                        <div class="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                                      d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
                                            </svg>
                                            <i class="bx bx-layer"></i>
                                        </div>
                                        <h4><a href="">Totul în bucătăria ta</a></h4>
                                        <p>În general, pentru a pregăti o rețetă avem nevoie de mai multe ustensile de
                                            bucătărie, cum ar fi tigaia, cratița,
                                            friteuza, mixerul, masina de paine. Acest aparat inteligent are totul
                                            încorporat,
                                            astfel încât poate fi folosit
                                            pentru a prăji, a
                                            găti sau a rumeni mâncarea, fără a fi nevoie să o transportați. De asemenea,
                                            are o
                                            cântare integrată, astfel
                                            încât să puteți cântări toate ingredientele. De parcă nu ar fi suficient,
                                            acesta
                                            încorporează și funcția de
                                            blender și tocător.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
                                     data-aos-delay="200">
                                    <div class="icon-box iconbox-red">
                                        <div class="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                                      d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
                                            </svg>
                                            <i class="bx bx-slideshow"></i>
                                        </div>
                                        <h4><a href="">Nu servește ca cuptor</a></h4>
                                        <p>Este adevărat că are multe funcții, deși dacă trebuie să va ganditi la un
                                            minus este
                                            lipsa de coacere. Rețetele
                                            care
                                            necesită finisare în cuptor, cum ar fi lasagna, după terminarea întregului
                                            proces de
                                            preparare, trebuie
                                            introduse în cuptor pentru a termina gătitul. Actualul model ajunge la
                                            temperatura
                                            de 160 de grade Celsius,
                                            reusind astfel sa si rumenreasca alimentele, dar cele doua preparate pe care
                                            nu le
                                            poate realiza datorita
                                            temperaturii maxime la care ajunge sunt: popcosnul si cartofii prajiti.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in"
                                     data-aos-delay="300">
                                    <div class="icon-box iconbox-teal">
                                        <div class="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                                      d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                                            </svg>
                                            <i class="bx bx-arch"></i>
                                        </div>
                                        <h4><a href="">"Amprenta persoanala"</a></h4>
                                        <p>Este evident că atingerea personală se poate pierde atunci când faceți o
                                            rețetă în
                                            acest aparat inteligent, cu
                                            toate ca el doar va sugereaza cantitatile, lasandu-va posibilitatea sa
                                            alegeti cat
                                            zahar, de exempl, sa
                                            adaugati. Poate fi considerata mai putin probabila dorinta de a adăuga
                                            condimente în ceea ce privește aroma pe care doriți să o aibă atunci cand
                                            gatiti
                                            retetele prestabilite. La fel
                                            se întâmplă cu anumite alimente, cum ar fi
                                            o paella. În funcție de locul în care îl faceți, acesta va ieși cu o aromă
                                            diferită,
                                            fie că este vorba de foc de
                                            lemne, sticlă ceramică sau foc de gaz. Acest lucru se pierde cu Thermomix si
                                            trebuie
                                            sa tineti cont ca gustul va
                                            fi acelasi de fiecare data cand o sa gatiti reteta, lucru care este un
                                            avantaj
                                            pentru restaurante.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                </main>

                <footer id="footer">

                    <div class="footer-top">
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-3 col-md-6 footer-contact">
                                    <h3>gătește ușor cu thermomix</h3>
                                    <p>
                                        Str. Toma Caragiu, nr 32<br/>
                                        Otopeni, jud. Ilfov<br/>
                                        Romania <br/><br/>
                                        <strong>Telefon: </strong>+40 723809147<br/>
                                        <strong>Email: </strong>gatesteusorcuthermomix@gmail.com<br/>
                                    </p>
                                </div>

                                <div class="col-lg-2 col-md-6 footer-links">
                                    <h4>Link-uri utile</h4>
                                    <ul>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Acasă</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#paste">Rețetă de Paște</a>
                                        </li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#colectii">Colecții
                                            Cookidoo</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#about">Despre Thermomix</a>
                                        </li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#services">Avantaje și
                                            dezavantaje</a>
                                        </li>
                                        {/*<li><i class="bx bx-chevron-right"></i> <a href="#contact">Contactează-mă</a></li>-->*/}

                                    </ul>
                                </div>

                                <div class="col-lg-3 col-md-6 footer-links">
                                    <h4>Serviciile oferite</h4>
                                    <ul>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Prezentare online</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Prezentare față în față
                                            acasă la
                                            dvs</a>
                                        </li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Prezentare față în față la
                                            sediul
                                            Thermomix, din Băneasa</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Ajutor permanent pe perioada
                                            utilizarii</a>
                                        </li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#">Recomandări de rețete</a>
                                        </li>
                                    </ul>
                                </div>
                                //todo
                                {/*<div class="col-lg-4 col-md-6 footer-newsletter">*/}
                                {/*    <h4>Primește vești despre Thermomix</h4>*/}
                                {/*    <p>Îți vom trimite rețete, noutăți despre Cookidoo și Thermomix</p>*/}
                                {/*    <form action="" method="post">-->*/}
                                {/*        <input type="email" name="email"><input type="submit" value="Înscrie-te">*/}
                                {/*    </form>*/}
                                {/*</div>*/}

                            </div>
                        </div>
                    </div>

                    <div class="container d-md-flex py-4">

                        <div class="me-md-auto text-center text-md-start">
                            <div class="copyright">
                                &copy; Copyright <strong><span>OnePage</span></strong>. Toate drepturile rezervate.
                            </div>
                            <div class="credits">
                                Realizat de <a href="https://alinapreda.ro/">Alina Preda</a>
                            </div>
                        </div>
                        <div class="social-links text-center text-md-right pt-3 pt-md-0">
                            <a href="https://www.facebook.com/gatesteusorthermomix/" class="facebook"><i
                                class="bx bxl-facebook"></i></a>
                            <a href="https://www.instagram.com/gateste.usor.cu.thermomix/" class="instagram"><i
                                class="bx bxl-instagram"></i></a>
                            {/*<a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>-->*/}
                        </div>
                    </div>
                </footer>

                <div id="preloader"></div>
                <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                    class="bi bi-arrow-up-short"></i></a>

                <script src="assets/vendor/aos/aos.js"></script>
                <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
                <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                <script src="assets/vendor/php-email-form/validate.js"></script>
                <script src="assets/vendor/purecounter/purecounter.js"></script>
                <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

                <script src="assets/js/main.js"></script>

                </body>
            </div>

        )
    }
}


export default App;
