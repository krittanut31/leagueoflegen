import Nav from "../component/Nav";
import { Link } from "react-router-dom";

const champions = [
  { name: "Aatrox", img: "Aatrox_0.jpg" },
  { name: "Ahri", img: "Ahri_0.jpg" },
  { name: "Akali", img: "Akali_0.jpg" },
  { name: "Akshan", img: "Akshan_0.jpg" },
  { name: "Alistar", img: "Alistar_0.jpg" },
  { name: "Amumu", img: "Amumu_0.jpg" },
  { name: "Anivia", img: "Anivia_0.jpg" },
  { name: "Annie", img: "Annie_0.jpg" },
  { name: "Aphelios", img: "Aphelios_0.jpg" },
  { name: "Ashe", img: "Ashe_0.jpg" },
  { name: "Aurelion", img: "AurelionSol_0.jpg" },
  { name: "Azir", img: "Azir_0.jpg" },
  { name: "Bard", img: "Bard_0.jpg" },
  { name: "Bel-Veth", img: "Belveth_0.jpg" },
  { name: "Blitzcrank", img: "Blitzcrank_0.jpg" },
  { name: "Brand", img: "Brand_0.jpg" },
  { name: "Braum", img: "Braum_0.jpg" },
  { name: "Caitlyn", img: "Caitlyn_0.jpg" },
  { name: "Camille", img: "Camille_0.jpg" },
  { name: "Cassiopeia", img: "Cassiopeia_0.jpg" },
  { name: "Chogath", img: "Chogath_0.jpg" },
  { name: "Corki", img: "Corki_0.jpg" },
  { name: "Darius", img: "Darius_0.jpg" },
  { name: "Diana", img: "Diana_0.jpg" },
  { name: "Draven", img: "Draven_0.jpg" },
  { name: "Dr.Mundo", img: "DrMundo_0.jpg" },
  { name: "Ekko", img: "Ekko_0.jpg" },
  { name: "Elise", img: "Elise_0.jpg" },
  { name: "Evelynn", img: "Evelynn_0.jpg" },
  { name: "Ezreal", img: "Ezreal_0.jpg" },
  { name: "Fiddlesticks", img: "Fiddlesticks_0.jpg" },
  { name: "Fiora", img: "Fiora_0.jpg" },
  { name: "Fizz", img: "Fizz_0.jpg" },
  { name: "Galio", img: "Galio_0.jpg" },
  { name: "Gangplank", img: "Gangplank_0.jpg" },
  { name: "Garen", img: "Garen_0.jpg" },
  { name: "Gnar", img: "Gnar_0.jpg" },
  { name: "Gragas", img: "Gragas_0.jpg" },
  { name: "Graves", img: "Graves_0.jpg" },
  { name: "Gwen", img: "Gwen_0.jpg" },
  { name: "Hecarim", img: "Hecarim_0.jpg" },
  { name: "Heimerdinger", img: "Heimerdinger_0.jpg" },
  { name: "Illaoi", img: "Illaoi_0.jpg" },
  { name: "Irelia", img: "Irelia_0.jpg" },
  { name: "Ivern", img: "Ivern_0.jpg" },
  { name: "Janna", img: "Janna_0.jpg" },
  { name: "JarvanIV", img: "JarvanIV_0.jpg" },
  { name: "Jax", img: "Jax_0.jpg" },
  { name: "Jayce", img: "Jayce_0.jpg" },
  { name: "Jhin", img: "Jhin_0.jpg" },
  { name: "Jinx", img: "Jinx_0.jpg" },
  { name: "Kaisa", img: "Kaisa_0.jpg" },
  { name: "Kalista", img: "Kalista_0.jpg" },
  { name: "Karma", img: "Karma_0.jpg" },
  { name: "Karthus", img: "Karthus_0.jpg" },
  { name: "Kassadin", img: "Kassadin_0.jpg" },
  { name: "Katarina", img: "Katarina_0.jpg" },
  { name: "Kayle", img: "Kayle_0.jpg" },
  { name: "Kayn", img: "Kayn_0.jpg" },
  { name: "Kennen", img: "Kennen_0.jpg" },
  { name: "Khazix", img: "Khazix_0.jpg" },
  { name: "Kindred", img: "Kindred_0.jpg" },
  { name: "Kled", img: "Kled_0.jpg" },
  { name: "KogMaw", img: "KogMaw_0.jpg" },
  { name: "Sante", img: "KSante_0.jpg" },
  { name: "Leblanc", img: "Leblanc_0.jpg" },
  { name: "LeeSin", img: "LeeSin_0.jpg" },
  { name: "Leona", img: "Leona_0.jpg" },
  { name: "Lillia", img: "Lillia_0.jpg" },
  { name: "Lissandra", img: "Lissandra_0.jpg" },
  { name: "Lucian", img: "Lucian_0.jpg" },
  { name: "Lulu", img: "Lulu_0.jpg" },
  { name: "Lux", img: "Lux_0.jpg" },
  { name: "Malphite", img: "Malphite_0.jpg" },
  { name: "Malzahar", img: "Malzahar_0.jpg" },
  { name: "Maokai", img: "Maokai_0.jpg" },
  { name: "Master Yi", img: "MasterYi_0.jpg" },
  { name: "Miss Fortune", img: "MissFortune_0.jpg" },
  { name: "Wukong", img: "MonkeyKing_0.jpg" },
  { name: "Mordekaiser", img: "Mordekaiser_0.jpg" },
  { name: "Morgana", img: "Morgana_0.jpg" },
  { name: "Nami", img: "Nami_0.jpg" },
  { name: "Nasus", img: "Nasus_0.jpg" },
  { name: "Nautilus", img: "Nautilus_0.jpg" },
  { name: "Neeko", img: "Neeko_0.jpg" },
  { name: "Nidalee", img: "Nidalee_0.jpg" },
  { name: "Nilah", img: "Nilah_0.jpg" },
  { name: "Nocturne", img: "Nocturne_0.jpg" },
  { name: "Nunu & willump", img: "Nunu_0.jpg" },
  { name: "Olaf", img: "Olaf_0.jpg" },
  { name: "Orianna", img: "Orianna_0.jpg" },
  { name: "Ornn", img: "Ornn_0.jpg" },
  { name: "Pantheon", img: "Pantheon_0.jpg" },
  { name: "Poppy", img: "Poppy_0.jpg" },
  { name: "Pyke", img: "Pyke_0.jpg" },
  { name: "Qiyana", img: "Qiyana_0.jpg" },
  { name: "Quinn", img: "Quinn_0.jpg" },
  { name: "Rakan", img: "Rakan_0.jpg" },
  { name: "Rammus", img: "Rammus_0.jpg" },
  { name: "RekSai", img: "RekSai_0.jpg" },
  { name: "Rell", img: "Rell_0.jpg" },
  { name: "Renata", img: "Renata_0.jpg" },
  { name: "Renekton", img: "Renekton_0.jpg" },
  { name: "Rengar", img: "Rengar_0.jpg" },
  { name: "Riven", img: "Riven_0.jpg" },
  { name: "Rumble", img: "Rumble_0.jpg" },
  { name: "Ryze", img: "Ryze_0.jpg" },
  { name: "Samira", img: "Samira_0.jpg" },
  { name: "Sejuani", img: "Sejuani_0.jpg" },
  { name: "Senna", img: "Senna_0.jpg" },
  { name: "Seraphine", img: "Seraphine_0.jpg" },
  { name: "Sett", img: "Sett_0.jpg" },
  { name: "Shaco", img: "Shaco_0.jpg" },
  { name: "Shen", img: "Shen_0.jpg" },
  { name: "Shyvana", img: "Shyvana_0.jpg" },
  { name: "Singed", img: "Singed_0.jpg" },
  { name: "Sion", img: "Sion_0.jpg" },
  { name: "Sivir", img: "Sivir_0.jpg" },
  { name: "Skarner", img: "Skarner_0.jpg" },
  { name: "Sona", img: "Sona_0.jpg" },
  { name: "Soraka", img: "Soraka_0.jpg" },
  { name: "Swain", img: "Swain_0.jpg" },
  { name: "Sylas", img: "Sylas_0.jpg" },
  { name: "Syndra", img: "Syndra_0.jpg" },
  { name: "TahmKench", img: "TahmKench_0.jpg" },
  { name: "Taliyah", img: "Taliyah_0.jpg" },
  { name: "Talon", img: "Talon_0.jpg" },
  { name: "Taric", img: "Taric_0.jpg" },
  { name: "Teemo", img: "Teemo_0.jpg" },
  { name: "Thresh", img: "Thresh_0.jpg" },
  { name: "Tristana", img: "Tristana_0.jpg" },
  { name: "Trundle", img: "Trundle_0.jpg" },
  { name: "Tryndamere", img: "Tryndamere_0.jpg" },
  { name: "Twisted Fate", img: "TwistedFate_0.jpg" },
  { name: "Twitch", img: "Twitch_0.jpg" },
  { name: "Udyr", img: "Udyr_0.jpg" },
  { name: "Urgot", img: "Urgot_0.jpg" },
  { name: "Varus", img: "Varus_0.jpg" },
  { name: "Vayne", img: "Vayne_0.jpg" },
  { name: "Veigar", img: "Veigar_0.jpg" },
  { name: "Vel'koz", img: "Velkoz_0.jpg" },
  { name: "Vex", img: "Vex_0.jpg" },
  { name: "Vi", img: "Vi_0.jpg" },
  { name: "Viego", img: "Viego_0.jpg" },
  { name: "Viktor", img: "Viktor_0.jpg" },
  { name: "Vladimir", img: "Vladimir_0.jpg" },
  { name: "Volibear", img: "Volibear_0.jpg" },
  { name: "Warwick", img: "Warwick_0.jpg" },
  { name: "Xayah", img: "Xayah_0.jpg" },
  { name: "Xerath", img: "Xerath_0.jpg" },
  { name: "Xin Zhao", img: "XinZhao_0.jpg" },
  { name: "Yasuo", img: "Yasuo_0.jpg" },
  { name: "Yone", img: "Yone_0.jpg" },
  { name: "Yorick", img: "Yorick_0.jpg" },
  { name: "Yuumi", img: "Yuumi_0.jpg" },
  { name: "Zac", img: "Zac_0.jpg" },
  { name: "Zed", img: "Zed_0.jpg" },
  { name: "Zeri", img: "Zeri_0.jpg" },
  { name: "Ziggs", img: "Ziggs_0.jpg" },
  { name: "Zilean", img: "Zilean_0.jpg" },
  { name: "Zoe", img: "Zoe_0.jpg" },
  { name: "Zyra", img: "Zyra_0.jpg" },
];

const Champions = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-col bg-pink-300 w-full h-auto ">
        <div className="flex bg-[url('https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img/blurred1.jpg')] bg-repeat-x w-full h-[16rem]">
          <div className="flex flex-col w-[78rem]  bg-red-200 mx-auto">
            <div className="my-12 h-full">
              <div className="h-full bg-orange-400">content</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-blue-400 pt-5 w-[84rem]  h-auto mx-auto ">
          <p className="flex justify-center  bg-white  ">
            ค้นหาสไตล์การเล่นที่ใช่จากแชมเปี้ยนกว่า 162 ตัว!
          </p>
          <div className="flex bg-white w-full h-auto mt-10  ">
            <div className=" grid grid-cols-5 gap-x-[1rem] gap-y-[1rem] text-center">
              {champions.map((champion) => (
                <Link
                  to="character"
                  className="w-[16rem] h-fit border-2 border-black"
                >
                  <div className="">
                    <img
                      src={`https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/${champion.img}`}
                      alt=""
                      className="w-full h-auto"
                      img
                    />
                    <p className="">{champion.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex bg-[#101215] w-full h-[24rem]">
          <div className="flex space-x-4  my-10 bg-white w-[78rem] mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Champions;
