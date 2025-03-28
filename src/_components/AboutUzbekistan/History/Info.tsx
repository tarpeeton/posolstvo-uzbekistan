import { Breadcrumb } from "@/ui/breadcrumb";
import { useTranslations } from "next-intl";

export const InfoHistory = () => {
    const t = useTranslations()


  return (
    <section className="flex flex-col gap-[24px] lg:gap-[50px] px-[20px] lg:px-[120px]">
      <div className="mt-[20px] lg:mt-[24px]">
        <Breadcrumb
          items={[
            {
              label: {
                ru: "Главная",
                uz: "Bosh sahifa",
                en: "Home",
              },
              href: "/",
            },
            {
              label: {
                ru: "О Узбекистане",
                uz: "O‘zbekiston haqida",
                en: "About Uzbekistan",
              },
              href: "/about-uzbekistan",
            },
            {
              label: {
                ru: "История и культура",
                uz: "Tarix va madaniyat",
                en: "History and Culture",
              },
              isCurrent: true,
            },
          ]}
        />
      </div>
      <article>
        <h1 className="text-[24px] lg:text-[32px] text-black" aria-label={t("historyCulture")}>
            {t("historyCulture")}
        </h1>
        <p className="text-[15px] text-[#232328] mt-4 leading-6">
        Культура Узбекистана одна из самых ярких и самобытных на Востоке. Это неподражаемые народные традиции, фольклор, музыка, танцы, изобразительное и народное прикладное искусство, неповторимая национальная кухня и национальная одежда.
Основными особенностями характера узбекской семьи является гостеприимство и традиционно почтительное уважение к старшим по возрасту. Узбеки обычно живут большими семьями, состоящими из нескольких поколений, поэтому предпочтение отдается большим домам на земле. Значительное место в быту, как элемент гостеприимства, занимает чайная церемония. Причем, заваривание чая и разливание его гостям является исключительной прерогативой хозяина. Принято всегда принимать приглашения на обед или ужин и приходить вовремя. Направляясь в гости, желательно захватить с собой сувениры или сладости для детей хозяина. За руку здороваются обычно только с мужчинами. С женщинами и лицами, сидящими в отдалении, здороваются, прикладывая правую руку к сердцу и сопровождая этот жест легким наклоном головы. Во время рукопожатия традиционно интересуются здоровьем, состоянием дел на работе и дома. При входе в жилое помещение снимается обувь. Необходимо занимать место, которое указывает хозяин. Причем, чем дальше оно от входа, тем оно почетнее.
Обряды узбекского народа складывались веками в результате сложного процесса слияния культурных навыков и традиций всех племен и народностей, которые участвовали в этногенезе узбеков. Они весьма самобытны, ярки и многообразны. Большое число обрядов сопровождают семейную жизнь и связаны с рождением и воспитанием ребенка и свадьбами. Особую роль играют обряды, связанные с рождением и воспитанием детей (бешик-туйи, хатна-килиш), бракосочетанием (фатиха-туй, свадьба).
К традиционным формам общественных отношений в Узбекистане относятся, прежде всего, махалля - соседская община, объединения мужчин "джура", цеховые объединения мастеров-ремесленников. Узбекская махалля имеет тысячелетнюю историю и является центром семейно-бытовых и религиозных обрядов и праздников. Здесь бережно сохраняются и передаются от поколения к поколению ритуалы их проведения. Сохранился и древний обычай взаимопомощи - хашар. Методом хашара помогают близким строить дом, благоустраивать свой район, улицу, город. В суверенном Узбекистане махалля стала хранителем традиций культуры и нравственности узбекского народа, признанным законом механизмом самоуправления граждан.
Фольклор, народные традиции
В список нематериальных шедевров мирового культурного наследия ЮНЕСКО были включены культурное наследие региона Бойсун Сурхандарьинской области Узбекистана и узбекский «шашмаком» — цикл, состоящий из нескольких классических музыкальных произведений.
В рамках проекта «Сохранение культурного наследия Бойсун для будущего поколения страны» была организована научная экспедиция, фестиваль «Бойсун бахори», проведена региональная конференция в Бойсуне. Изданы научные книги и мультимедийные диски «Искусство Бойсуна» и «Музыкальное искусство Бойсуна». Открыт музей и центр национального прикладного искусства в Бойсуне. При хокимияте создан центр по развитию культурного туризма, в Доме культуры Бойсуна открыта Фольклорная академия и обеспечен современным оборудованием.
В рамках проекта «Сохранение и развитие „Шошмаком“ и передача его будущему поколению» были изданы книги «Обычаи Шошмаком и современность», «Фахриддин Содиков», «макомы Ташкента и Ферганы», «макомы Хорезма», подготовлен к печати книга Юнуса Ражабий «Шошмаком», подготовлены аудио диски и видео фильмы «Шошмаком».
Музыка
Музыка Узбекистана подобна музыке Ближнего Востока. Ей присущи сложные ритмы, которые порождают богатый мелодичный звук. Музыка представляет собой индивидуальный нюанс и творческую разновидность, хотя ритмы, в общем, следуют за структурами стиха. Многие из самых популярных узбекских инструментов имеют струны, типа рубаб или дутар.
Инструменты, подобные этим также популярны в некоторых других частях Центральной Азии, Закавказья и Ближнего Востока. Старинная традиция поющих менестрелей, или бардов, была важной частью раннего музыкального (и литературного) развития.
Узбекское народное музыкальное творчество характеризуется многогранностью тематики и разнообразием жанров. Песни и инструментальные пьесы в соответствии с их функциями и формами бытования можно разделить на две группы: исполняемые в определенное время и при определенных обстоятельствах и исполняемые в любое время. К первой группе относятся песни, связанные с обрядами, трудовыми процессами, различными церемониями, театрализованными зрелищными представлениями, играми.
Узбекский народ популярен своими песнями. Кошук — бытовая песня куплетного строения с мелодией небольшого диапазона, охватывающей одну или две строфы поэтического текста. Ряд общих с кошуком черт имеют лапар и ялла — песни также куплетного строения. Танцевальный характер мелодии этого жанра предусматривает их исполнение в сопровождении шуточных танцев.
Лапар — это песня-диалог. В Хорезме называют песни, исполняемые одним певцом. В некоторых районах термин — лапар применяется к свадебным песня «Улан» (исполняются как диалог мужчины и женщины).
Жанр ялла включает два вида песен: мелодия узкого диапазона, а запев — соло одновременно с танцем. Поэтическими текстами для песен служат народные и профессиональные стихи поэтов Востока.
Наиболее развитые образцы ашулы по существу являются жанром профессиональной музыки устной традиции. Особое место в узбекской музыкальной наследии занимают дастаны — эпическое сказаниелирико-героического содержания. Макомы — составляют основной классический фонд профессиональной музыки устной традиции.
Одежда
Своеобразие одежды местных народов издавна определялось климатическими, бытовыми условиями и родоплеменными традициями. Еще в 19 в. одежда (халаты, платья, рубахи) продолжали сохранять черты архаичности: широкая, длинная, цельнокроеная, она свободно ниспадала, скрывая формы человеческого тела. Одежда отличалась единообразием: зимняя и летняя, мужская, женская и детская, она была близка по форме и крою.
Традиционный национальный мужской костюм состоит из теплого стеганого халата — чапана, подвязанного платком или платками, головного убора тюбетейки, а также сапог, выполненных из тонкой кожи. Мужчины носили рубахи прямого покроя, нижний и верхний халаты. Халат мог быть легким или теплым, стеганным на вате. По бокам халата имелись разрезы для удобства при ходьбе и сидении на полу. Халат — чапан обычно подвязывался платком или платками.
Праздничный национальный костюм отличается от повседневного красотой и богатством используемых тканей, вышивок и т. д.
Женский национальный костюм состоит из халата, функционального платья простого покроя из хан-атласа, и шаровар — широких тонких брюк, зауженных внизу. Головной убор женщины состоял из трех основных элементов: шапочки, платка и тюрбана. Праздничный женский костюм отличается от повседневного добротностью и красотой тканей, из которых он выполняется. Детская одежда повторяла формы одежды взрослых. Наряду с общими чертами, одежда каждого района или племени имела своеобразие, выражающееся в используемой ткани, форме кроя и т. д.
Одним из наиболее популярных и повсеместно распространенных видов народно-прикладногоискусства Узбекистана всегда была тюбетейка — твердая или мягкая шапочка на подкладке. Тюбетейка стала неотъемлемой частью узбекского национального костюма, вошла в жизнь и традиции узбекского народа. Наиболее распространенные формы узбекских тюбетеек — четырехгранные, слегка конусообразные. Тюбетейки изготавливали из двух или нескольких слоев ткани, простегиваемых и укрепляемых шелковой или хлопчатобумажной нитью. Готовая тюбетейка вышивалась шелковой нитью, золотой или серебряной канителью. Искусством вышивания тюбетеек издавна владели в основном женщины. К наиболее часто встречающимся мотивам, украшающим тюбетейки, относятся цветочный мотив, миндалевидный мотив «бодом» — символ жизни и плодородия. Распространенным в орнаменте тюбетеек является узор «илон изи» (след змеи), выполняющий роль оберега.
Тюбетейки различаются по регионам формой, орнаментом, знаками художественной символики. На создание определенного типа тюбетеек в том или ином регионе влияли не только природные условия, но и исторически сложившиеся в нем художественные традиции и общий уровень развития художества и культуры. Например, если в Сурхандарье и Кашкадарье (особенно в Байсуне) круглые, конусообразные формы тюбетейки вышивались ярко контрастными шелковыми нитками, то в Бухаре они большей частью украшались золотым шитьем. Наиболее ранние по своему происхождению тюбетейки изготовлены в городах Ферганской долины: Чусте, Маргилане, Коканде и Андижане. Особенно отличались Шахрисябзкие «Гилам дуппи» сплошным зашивом в технике «Ироки». В Ташкенте большинство тюбетеек для женщин вышивалось в технике сплошного зашива крестом «Ироки», где преобладали цветочные мотивы на белом вышитом фоне. К названиям этих тюбетеек добавляется имя города, где они созданы: «Чуст дуппи», «Кукон дуппи», «Шахрихон дуппи», «Маргилан дуппи», «Гилам (Шахрисябз) дуппи» и т.д. Локальные особенности иногда были выражены на столько сильно, что именно по головному убору определяли принадлежность человека к той или иной местности.
Национальная кухня
Узбекская кухня является самой разнообразной на Востоке. Некоторые из рецептов приготовления узбекских блюд имеют многовековую историю. Каждое блюдо имеет свои традиционные ритуалы и способы приготовления. Существует около 1000 различных рецептов блюд, напитков и кондитерских изделий.
Плов — самое знаменитое блюдо Узбекистана. Оно считается обыденным и одновременно праздничным блюдом. Без него не проходит ни одна свадьба, вечеринка и день рождения. Основным компонентом плова является рис, мясо морковь, лук и др.
Одной из знаменитых узбекских закусок является «кази» приготавливаемая из конины.
Хлеб является священным для узбекского народа. Согласно традициям, когда кто-либо надолго уезжает из дому, он должен откусить маленький кусочек лепешки, которая сохраняется до тех пор, пока человек не вернется и не съест её. Традиция ношения на голове корзин с хлебом также служит примером высокого уважения по отношению к хлебу. На протяжении многих веков пекари пекут лепешки в тандыре (глиняной печи), в результате чего хлеб получается вкусным и хрустящим. Различают два вида лепешек — обычная (оби-нон) и праздничная (патыр). Обычная лепешка замешивается на воде, покрывается седаной. Патыр готовится из слоеного теста с добавлением бараньего жира.
Шашлык и сомса (национальные пирожки из слоенного теста, выпекаемые в тандыре) является очень известными блюдами узбекской кухни.
Супы занимают важное место в национальной кухне Узбекистана. Эти блюда богаты такими овощами как морковь, свекла, а также луком и зеленью. Самые популярные супы это мастава и шурпа.
Халва, знаменитое на весь мир традиционное восточное лакомство, готовится из пшеничной муки, сахара с орехами или седаной. В Узбекистане существует около 50 различных видов халвы.
Кроме того, Узбекистан знаменит своими вкусными соками, приготовленными из фруктов, виноградов, дынь и арбузов. Также имеется большое количество разнообразных сухофруктов, орехов и миндаля.
Если Вы посетите Узбекистан, обязательно попробуйте национальную кухню, и попросите у хозяев рецепт понравившегося Вам блюда.
Национальный узбекский танец: виды и школы узбекского танца
Национальный узбекский танец необычайно выразителен. Он олицетворяет собой всю красоту узбекской нации. Главные отличия узбекского танца от других танцев народов Востока – это, во-первых, акцент на сложные и выразительные движение рук, а во-вторых – богатая мимика. Различают два вида узбекского танца - традиционный классический танец и народный (фольклорный) танец.
Классический традиционный узбекский танец – это искусство, которое культивируется в особых танцевальных школах, а затем демонстрируется на большой сцене. Можно выделить три школы узбекского танца: ферганскую, бухарскую и хорезмскую. Танцы ферганской группы отличают мягкость, плавность и выразительность движений, лёгкий скользящий шаг, оригинальные движения на месте и по кругу. Бухарский танец также отличает резкость движений, откинутые плечи и очень красивый золотошвейный костюм. Оригинальные и самобытные движения отличают хорезмский стиль.
В народном узбекском танце представлены практически все регионы, здесь царит необыкновенное разнообразие. Эти танцы оживают на всех семейных, деревенских, городских праздниках. Эти танцы передаются от поколения к поколению, в них сохраняются старинные танцевальные традиции, а также реальный или уходящий быт.
Изобразительное искусство
Народное искусство, переданное из поколения в поколение, процветает сегодня в Узбекистане. Народные умельцы применяют древние навыки типа декоративной живописи стены, резьбы по дереву и ганчу, вышивки. В Ферганской долине ремесленники используют традиционные, старинные методы чтобы ткать шелк в ярко мультицветном, геометрическом изображение, называемом хан-атлас («король атласов») и производят ярко синюю и зеленую керамику, используя местную красную глину и естественные пигменты.
Развитие национальной живописи началось много веков тому назад. В XVI–XVII веках в Бухаре и некоторых иных городских центрах значительных успехов достигло искусство рукописи и переплётного дела. Художественное оформление манускрипта включало изысканную каллиграфию, выполнение водяными красками тонкие орнаменты на полях. В Самарканде и особенно Бухаре достигла расцвета среднеазиатская школа миниатюры.
В ней развивалась несколько стилевых направлений. Одно из них, связанно с традициями Камолиддина Бехзода (великий художник средневековья, основатель одного из направлений восточной миниатюры), характеризуется утончённостью письма и архитектурных фонов.
        </p>
      </article>



      
    </section>
  );
};
