import { Card, BoxCharacter } from "./styles";

import AnaPose from "../../Assets/Pose/ana.png";
import AshePose from "../../Assets/Pose/ashe.png";
import BaptistePose from "../../Assets/Pose/baptiste.png";
import BastionPose from "../../Assets/Pose/bastion.png";
import BrigittePose from "../../Assets/Pose/brigitte.png";
import CassidyPose from "../../Assets/Pose/cassidy.png";
import DoomfistPose from "../../Assets/Pose/doomfist.png";
import DvaPose from "../../Assets/Pose/dva.png";
import EchoPose from "../../Assets/Pose/echo.png";
import GenjiPose from "../../Assets/Pose/genji.png";
import HanzoPose from "../../Assets/Pose/hanzo.png";
import JunkratPose from "../../Assets/Pose/junkrat.png";
import LucioPose from "../../Assets/Pose/lucio.png";
import MeiPose from "../../Assets/Pose/mei.png";
import MercyPose from "../../Assets/Pose/mercy.png";
import MoiraPose from "../../Assets/Pose/moira.png";
import OrisaPose from "../../Assets/Pose/orisa.png";
import PharahPose from "../../Assets/Pose/pharah.png";
import ReaperPose from "../../Assets/Pose/reaper.png";
import ReinhardtPose from "../../Assets/Pose/reinhardt.png";
import RoadhogPose from "../../Assets/Pose/roadhog.png";
import SigmaPose from "../../Assets/Pose/sigma.png";
import SoldadoPose from "../../Assets/Pose/76.png";
import SombraPose from "../../Assets/Pose/sombra.png";
import SymmetraPose from "../../Assets/Pose/symmetra.png";
import TorbjornPose from "../../Assets/Pose/torbjorn.png";
import TracerPose from "../../Assets/Pose/tracer.png";
import WidowmakerPose from "../../Assets/Pose/widowmaker.png";
import WinstonPose from "../../Assets/Pose/winston.png";
import WreckingPose from "../../Assets/Pose/ball.png";
import ZaryaPose from "../../Assets/Pose/zarya.png";
import ZenyattaPose from "../../Assets/Pose/zenyatta.png";

import AnaIcon from "../../Assets/Characters/ana.png";
import AsheIcon from "../../Assets/Characters/ashe.png";
import BaptisteIcon from "../../Assets/Characters/baptiste.png";
import BastionIcon from "../../Assets/Characters/bastion.png";
import BrigitteIcon from "../../Assets/Characters/brigitte.png";
import CassidyIcon from "../../Assets/Characters/cassidy.png";
import DoomfistIcon from "../../Assets/Characters/doomfist.png";
import DvaIcon from "../../Assets/Characters/dva.png";
import EchoIcon from "../../Assets/Characters/echo.png";
import GenjiIcon from "../../Assets/Characters/genji.png";
import HanzoIcon from "../../Assets/Characters/hanzo.png";
import JunkratIcon from "../../Assets/Characters/junkrat.png";
import LucioIcon from "../../Assets/Characters/lucio.png";
import MeiIcon from "../../Assets/Characters/mei.png";
import MercyIcon from "../../Assets/Characters/mercy.png";
import MoiraIcon from "../../Assets/Characters/moira.png";
import OrisaIcon from "../../Assets/Characters/orisa.png";
import PharahIcon from "../../Assets/Characters/pharah.png";
import ReaperIcon from "../../Assets/Characters/reaper.png";
import ReinhardtIcon from "../../Assets/Characters/reinhardt.png";
import RoadhogIcon from "../../Assets/Characters/roadhog.png";
import SigmaIcon from "../../Assets/Characters/sigma.png";
import SoldadoIcon from "../../Assets/Characters/76.png";
import SombraIcon from "../../Assets/Characters/sombra.png";
import SymmetraIcon from "../../Assets/Characters/symmetra.png";
import TorbjornIcon from "../../Assets/Characters/torbjorn.png";
import TracerIcon from "../../Assets/Characters/tracer.png";
import WidowmakerIcon from "../../Assets/Characters/widowmaker.png";
import WinstonIcon from "../../Assets/Characters/winston.png";
import WreckingIcon from "../../Assets/Characters/ball.png";
import ZaryaIcon from "../../Assets/Characters/zarya.png";
import ZenyattaIcon from "../../Assets/Characters/zenyatta.png";

const infos = [
  {
    name: "Ana",
    icon: AnaIcon,
    img: AnaPose,
    desc: "Essa justiceira destemida da Overwatch reapareceu ap??s anos de isolamento para proteger uma nova gera????o.",
  },
  {
    name: "Ashe",
    icon: AsheIcon,
    img: AshePose,
    desc: "L??der da not??ria gangue Deadlock, que aterroriza o sudoeste americano.",
  },
  {
    name: "Baptiste",
    icon: BaptisteIcon,
    img: BaptistePose,
    desc: "M??dico de combate de elite, armado com um arsenal de dispositivos de cura experimentais.",
  },
  {
    name: "Bastion",
    icon: BastionIcon,
    img: BastionPose,
    desc: "Um rob?? que se transforma e explora o mundo; fascinado pela natureza, por??m cauteloso com a humanidade.",
  },
  {
    name: "Brigitte",
    icon: BrigitteIcon,
    img: BrigittePose,
    desc: "Uma paladina de armadura apaixonada por aventuras que adora ajudar os mais necessitados.",
  },
  {
    name: "Cassidy",
    icon: CassidyIcon,
    img: CassidyPose,
    desc: "Um pistoleiro fora da lei que faz justi??a com seus pr??prios termos.",
  },
  {
    name: "D.Va",
    icon: DvaIcon,
    img: DvaPose,
    desc: "Essa ex-gamer profissional transformada em piloto de mecha de ??ltima gera????o na defesa de sua cidade natal.",
  },
  {
    name: "Doomfist",
    icon: DoomfistIcon,
    img: DoomfistPose,
    desc: "Um estrategista que usa sua intelig??ncia, seu carisma e for??a bruta para construir um mundo mais forte.",
  },
  {
    name: "Echo",
    icon: EchoIcon,
    img: EchoPose,
    desc: "Rob?? evolutivo programado com uma intelig??ncia artificial de r??pida adapta????o, Echo representa a mais avan??ada tecnologia.",
  },
  {
    name: "Genji",
    icon: GenjiIcon,
    img: GenjiPose,
    desc: "Um ciborgue ninja e guerreiro mortal que fez as pazes com seu corpo mec??nico.",
  },
  {
    name: "Hanzo",
    icon: HanzoIcon,
    img: HanzoPose,
    desc: "Um arqueiro e assassino mortal sem igual.",
  },
  {
    name: "Junkrat",
    icon: JunkratIcon,
    img: JunkratPose,
    desc: "Um lun??tico obcecado por explosivos que vive para causar destrui????o e caos.",
  },
  {
    name: "Lucio",
    icon: LucioIcon,
    img: LucioPose,
    desc: "Uma celebridade internacional que luta pela mudan??a social atrav??s de suas m??sicas e a????es.",
  },
  {
    name: "Mei",
    icon: MeiIcon,
    img: MeiPose,
    desc: "Uma especialista em manipula????o clim??tica que luta pela preserva????o do meio ambiente.",
  },
  {
    name: "Mercy",
    icon: MercyIcon,
    img: MercyPose,
    desc: "Um anjo da guarda, uma curandeira sem igual, cientista brilhante e defensora convicta da paz.",
  },
  {
    name: "Moira",
    icon: MoiraIcon,
    img: MoiraPose,
    desc: "Uma brilhante geneticista que busca pela descoberta cient??fica sem restri????es ??ticas.",
  },
  {
    name: "Orisa",
    icon: OrisaIcon,
    img: OrisaPose,
    desc: "Uma defensora da paz, feita para defender o povo de Numbani.",
  },
  {
    name: "Pharah",
    icon: PharahIcon,
    img: PharahPose,
    desc: "Uma oficial condecorada que patrulha os c??us em sua armadura de combate Raptora experimental.",
  },
  {
    name: "Reaper",
    icon: ReaperIcon,
    img: ReaperPose,
    desc: "Um mercen??rio e assassino sem escr??pulos que ca??a antigos agentes da Overwatch.",
  },
  {
    name: "Reinhardt",
    icon: ReinhardtIcon,
    img: ReinhardtPose,
    desc: "Um campe??o de eras passadas que vive pelos nobres c??digos do valor, da justi??a e da coragem.",
  },
  {
    name: "Roadhog",
    icon: RoadhogIcon,
    img: RoadhogPose,
    desc: "Um matador sanguin??rio com uma for??a extraordin??ria e conhecido por sua crueldade e destrui????o gratuita.",
  },
  {
    name: "Sigma",
    icon: SigmaIcon,
    img: SigmaPose,
    desc: "Astrof??sico exc??ntrico que um experimento orbital catastr??fico transformou em arma ambulante.",
  },
  {
    name: "Soldado: 76",
    icon: SoldadoIcon,
    img: SoldadoPose,
    desc: "Um vigilante que vai lutar at?? o fim para entregar os inimigos da Overwatch nas m??os da justi??a.",
  },
  {
    name: "Sombra",
    icon: SombraIcon,
    img: SombraPose,
    desc: "Uma hacker famosa, na busca por segredos e o poder que eles trazem.",
  },
  {
    name: "Symmetra",
    icon: SymmetraIcon,
    img: SymmetraPose,
    desc: "Symmetra literalmente dobra a realidade com construtos de luz s??lida.",
  },
  {
    name: "Torbjorn",
    icon: TorbjornIcon,
    img: TorbjornPose,
    desc: "Um habilidoso engenheiro que projeta sistemas de armas no campo de batalha.",
  },
  {
    name: "Tracer",
    icon: TracerIcon,
    img: TracerPose,
    desc: "Uma ex-agente da Overwatch, aventureira que salta no tempo e uma for??a incontrol??vel para o bem.",
  },
  {
    name: "Widowmaker",
    icon: WidowmakerIcon,
    img: WidowmakerPose,
    desc: "Uma assassina perfeita: paciente e impiedosamente eficiente que n??o mostra emo????o nem remorso.",
  },
  {
    name: "Winston",
    icon: WinstonIcon,
    img: WinstonPose,
    desc: "Um gorila geneticamente modificado altamente inteligente, cientista brilhante e her??i com um potencial humano.",
  },
  {
    name: "Wrecking Ball",
    icon: WreckingIcon,
    img: WreckingPose,
    desc: "Esse tanque rolante ?? pilotado por um hamster da Lua geneticamente modificado.",
  },
  {
    name: "Zarya",
    icon: ZaryaIcon,
    img: ZaryaPose,
    desc: "Uma das mulheres mais fortes do mundo que sacrificou o triunfo pessoal para proteger seu pa??s.",
  },
  {
    name: "Zenyatta",
    icon: ZenyattaIcon,
    img: ZenyattaPose,
    desc: "Um monge ??mnico que vagueia pelo mundo em busca de ilumina????o espiritual.",
  },
];

interface CardI {
  setName: any;
  setDesc: any;
  setImg: any;
}

export const CardCharacter = (props: CardI) => {
  return (
    <>
      <Card>
        {infos.map((e) => {
          return (
            <BoxCharacter
              key={Math.random()}
              onMouseEnter={() => {
                props.setName(e.name);
                props.setDesc(e.desc);
                props.setImg(e.img);
              }}
              BoxBackground={e.icon}
            >
              <div className="iconImg"></div>
              <div className="iconName">
                <span>{e.name}</span>
              </div>
            </BoxCharacter>
          );
        })}
      </Card>
    </>
  );
};
