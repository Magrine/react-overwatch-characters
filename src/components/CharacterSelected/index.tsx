import { useState } from "react";
import { CardCharacter } from "../CardCharacter";
import { Banner, BannerImg, CharacterSelect } from "./styles";

import TracerPose from "../../Assets/Pose/tracer.png";

interface CharacterI {
  name: string;
  desc: string;
  img: string;
  e: string;
}

export const CharacterSelected = () => {
  const [selectedName, setSelectedName] =
    useState<CharacterI["name"]>("Tracer");
  const [selectedDesc, setSelectedDesc] = useState<CharacterI["desc"]>(
    "Uma ex-agente da Overwatch, aventureira que salta no tempo e uma força incontrolável para o bem."
  );
  const [selectedImg, setSelectedImg] = useState<CharacterI["img"]>(TracerPose);

  const setName = (e: string) => {
    setSelectedName(e);
  };
  const setDesc = (e: string) => {
    setSelectedDesc(e);
  };
  const setImg = (e: string) => {
    setSelectedImg(e);
  };

  return (
    <section>
      <Banner>
        <div className="banner">
          <h1>O MUNDO PRECISA DE HERÓIS</h1>
          <span>
            Desacelerar o tempo, detonar tudo de dentro de uma armadura a jato
            ou pilotar uma bolinha de hamster superpoderosa: em Overwatch, cada
            herói possui um conjunto exclusivo de habilidades devastadoras.
          </span>
        </div>
      </Banner>
      <CharacterSelect>
        <div className="selected">
          <BannerImg BannerPose={selectedImg}></BannerImg>
          <div className="SelectedText">
            <h2>{selectedName.toUpperCase()}</h2>
            <span>{selectedDesc}</span>
          </div>
        </div>
      </CharacterSelect>

      <CardCharacter setName={setName} setDesc={setDesc} setImg={setImg} />
    </section>
  );
};
