import { useHandStore, useHeadStore, useBodyStore, useFeetStore, usePlanarStore, useRopeStore } from "../../stores/relic-store";
import { useShallow } from "zustand/react/shallow";
import RelicPiece from "./RelicPiece";
import SubStat from "./SubStat";
import PlanarPiece from "./PlanarPiece";
import { Button } from "../ui/button";

export default function CreateRelic() {
  const [relicHead, setRelicHead, mainStatHead, setMainStatHead, sub, setSubStat, increaseSubStep, decreaseSubStep, setRoll, upgrade, resetHead] = useHeadStore(
    useShallow((state) => [state.relicHead, state.setRelicHead, state.mainStatHead, state.setMainStatHead, state.sub, state.setSubStat, state.increaseSubStep, state.decreaseSubStep, state.setRoll, state.upgrade, state.resetHead])
  );

  const [relicHand, setRelicHand, mainStatHand, setMainStatHand, subHand, setSubStatHand, increaseSubStepHand, decreaseSubStepHand, setRollHand, upgradeHand, resetHand] = useHandStore(
    useShallow((state) => [
      state.relicHand,
      state.setRelicHand,
      state.mainStatHand,
      state.setMainStatHand,
      state.subHand,
      state.setSubStatHand,
      state.increaseSubStepHand,
      state.decreaseSubStepHand,
      state.setRollHand,
      state.upgradeHand,
      state.resetHand,
    ])
  );
  const [relicBody, setRelicBody, mainStatBody, setMainStatBody, subBody, setSubStatBody, increaseSubStepBody, decreaseSubStepBody, setRollBody, upgradeBody, resetBody] = useBodyStore(
    useShallow((state) => [
      state.relicBody,
      state.setRelicBody,
      state.mainStatBody,
      state.setMainStatBody,
      state.subBody,
      state.setSubStatBody,
      state.increaseSubStepBody,
      state.decreaseSubStepBody,
      state.setRollBody,
      state.upgradeBody,
      state.resetBody,
    ])
  );
  const [relicFeet, setRelicFeet, mainStatFeet, setMainStatFeet, subFeet, setSubStatFeet, increaseSubStepFeet, decreaseSubStepFeet, setRollFeet, upgradeFeet, resetFeet] = useFeetStore(
    useShallow((state) => [
      state.relicFeet,
      state.setRelicFeet,
      state.mainStatFeet,
      state.setMainStatFeet,
      state.subFeet,
      state.setSubStatFeet,
      state.increaseSubStepFeet,
      state.decreaseSubStepFeet,
      state.setRollFeet,
      state.upgradeFeet,
      state.resetFeet,
    ])
  );
  const [relicPlanar, setRelicPlanar, mainStatPlanar, setMainStatPlanar, subPlanar, setSubStatPlanar, increaseSubStepPlanar, decreaseSubStepPlanar, setRollPlanar, upgradePlanar, resetPlanar] = usePlanarStore(
    useShallow((state) => [
      state.relicPlanar,
      state.setRelicPlanar,
      state.mainStatPlanar,
      state.setMainStatPlanar,
      state.subPlanar,
      state.setSubStatPlanar,
      state.increaseSubStepPlanar,
      state.decreaseSubStepPlanar,
      state.setRollPlanar,
      state.upgradePlanar,
      state.resetPlanar,
    ])
  );
  const [relicRope, setRelicRope, mainStatRope, setMainStatRope, subRope, setSubStatRope, increaseSubStepRope, decreaseSubStepRope, setRollRope, upgradeRope, resetRope] = useRopeStore(
    useShallow((state) => [
      state.relicRope,
      state.setRelicRope,
      state.mainStatRope,
      state.setMainStatRope,
      state.subRope,
      state.setSubStatRope,
      state.increaseSubStepRope,
      state.decreaseSubStepRope,
      state.setRollRope,
      state.upgradeRope,
      state.resetRope,
    ])
  );

  return (
    <div>
      <div className="flex gap-3">
        <h1 className=" text-2xl font-bold">Create Relic</h1>
        <Button
          onClick={() => {
            resetHead();
            resetBody();
            resetRope();
            resetHand();
            resetFeet();
            resetPlanar();
          }}
          variant="destructive"
        >
          Clear All
        </Button>
      </div>
      <div>
        <RelicPiece reset={resetHead} name={"Head"} pc={0} upgradePc={upgrade} relicPc={relicHead} setRelic={setRelicHead} mainStat={mainStatHead} setMainStat={setMainStatHead}>
          <SubStat index={0} sub={sub} setSubStat={setSubStat} increaseSubStep={increaseSubStep} decreaseSubStep={decreaseSubStep} setRoll={setRoll} upgrade={upgrade} />
          <SubStat index={1} sub={sub} setSubStat={setSubStat} increaseSubStep={increaseSubStep} decreaseSubStep={decreaseSubStep} setRoll={setRoll} upgrade={upgrade} />
          <SubStat index={2} sub={sub} setSubStat={setSubStat} increaseSubStep={increaseSubStep} decreaseSubStep={decreaseSubStep} setRoll={setRoll} upgrade={upgrade} />
          <SubStat index={3} sub={sub} setSubStat={setSubStat} increaseSubStep={increaseSubStep} decreaseSubStep={decreaseSubStep} setRoll={setRoll} upgrade={upgrade} />
        </RelicPiece>
        <RelicPiece reset={resetHand} name={"Hand"} pc={1} upgradePc={upgradeHand} relicPc={relicHand} setRelic={setRelicHand} mainStat={mainStatHand} setMainStat={setMainStatHand}>
          <SubStat index={0} sub={subHand} setSubStat={setSubStatHand} increaseSubStep={increaseSubStepHand} decreaseSubStep={decreaseSubStepHand} setRoll={setRollHand} upgrade={upgradeHand} />
          <SubStat index={1} sub={subHand} setSubStat={setSubStatHand} increaseSubStep={increaseSubStepHand} decreaseSubStep={decreaseSubStepHand} setRoll={setRollHand} upgrade={upgradeHand} />
          <SubStat index={2} sub={subHand} setSubStat={setSubStatHand} increaseSubStep={increaseSubStepHand} decreaseSubStep={decreaseSubStepHand} setRoll={setRollHand} upgrade={upgradeHand} />
          <SubStat index={3} sub={subHand} setSubStat={setSubStatHand} increaseSubStep={increaseSubStepHand} decreaseSubStep={decreaseSubStepHand} setRoll={setRollHand} upgrade={upgradeHand} />
        </RelicPiece>
        <RelicPiece reset={resetBody} name={"Body"} pc={2} upgradePc={upgradeBody} relicPc={relicBody} setRelic={setRelicBody} mainStat={mainStatBody} setMainStat={setMainStatBody}>
          <SubStat index={0} sub={subBody} setSubStat={setSubStatBody} increaseSubStep={increaseSubStepBody} decreaseSubStep={decreaseSubStepBody} setRoll={setRollBody} upgrade={upgradeBody} />
          <SubStat index={1} sub={subBody} setSubStat={setSubStatBody} increaseSubStep={increaseSubStepBody} decreaseSubStep={decreaseSubStepBody} setRoll={setRollBody} upgrade={upgradeBody} />
          <SubStat index={2} sub={subBody} setSubStat={setSubStatBody} increaseSubStep={increaseSubStepBody} decreaseSubStep={decreaseSubStepBody} setRoll={setRollBody} upgrade={upgradeBody} />
          <SubStat index={3} sub={subBody} setSubStat={setSubStatBody} increaseSubStep={increaseSubStepBody} decreaseSubStep={decreaseSubStepBody} setRoll={setRollBody} upgrade={upgradeBody} />
        </RelicPiece>
        <RelicPiece reset={resetFeet} name={"Feet"} pc={3} upgradePc={upgradeFeet} relicPc={relicFeet} setRelic={setRelicFeet} mainStat={mainStatFeet} setMainStat={setMainStatFeet}>
          <SubStat index={0} sub={subFeet} setSubStat={setSubStatFeet} increaseSubStep={increaseSubStepFeet} decreaseSubStep={decreaseSubStepFeet} setRoll={setRollFeet} upgrade={upgradeFeet} />
          <SubStat index={1} sub={subFeet} setSubStat={setSubStatFeet} increaseSubStep={increaseSubStepFeet} decreaseSubStep={decreaseSubStepFeet} setRoll={setRollFeet} upgrade={upgradeFeet} />
          <SubStat index={2} sub={subFeet} setSubStat={setSubStatFeet} increaseSubStep={increaseSubStepFeet} decreaseSubStep={decreaseSubStepFeet} setRoll={setRollFeet} upgrade={upgradeFeet} />
          <SubStat index={3} sub={subFeet} setSubStat={setSubStatFeet} increaseSubStep={increaseSubStepFeet} decreaseSubStep={decreaseSubStepFeet} setRoll={setRollFeet} upgrade={upgradeFeet} />
        </RelicPiece>
        <PlanarPiece reset={resetPlanar} name={"Planar"} pc={0} upgradePc={upgradePlanar} relicPc={relicPlanar} setRelic={setRelicPlanar} mainStat={mainStatPlanar} setMainStat={setMainStatPlanar}>
          <SubStat index={0} sub={subPlanar} setSubStat={setSubStatPlanar} increaseSubStep={increaseSubStepPlanar} decreaseSubStep={decreaseSubStepPlanar} setRoll={setRollPlanar} upgrade={upgradePlanar} />
          <SubStat index={1} sub={subPlanar} setSubStat={setSubStatPlanar} increaseSubStep={increaseSubStepPlanar} decreaseSubStep={decreaseSubStepPlanar} setRoll={setRollPlanar} upgrade={upgradePlanar} />
          <SubStat index={2} sub={subPlanar} setSubStat={setSubStatPlanar} increaseSubStep={increaseSubStepPlanar} decreaseSubStep={decreaseSubStepPlanar} setRoll={setRollPlanar} upgrade={upgradePlanar} />
          <SubStat index={3} sub={subPlanar} setSubStat={setSubStatPlanar} increaseSubStep={increaseSubStepPlanar} decreaseSubStep={decreaseSubStepPlanar} setRoll={setRollPlanar} upgrade={upgradePlanar} />
        </PlanarPiece>
        <PlanarPiece reset={resetRope} name={"Rope"} pc={1} upgradePc={upgradeRope} relicPc={relicRope} setRelic={setRelicRope} mainStat={mainStatRope} setMainStat={setMainStatRope}>
          <SubStat index={0} sub={subRope} setSubStat={setSubStatRope} increaseSubStep={increaseSubStepRope} decreaseSubStep={decreaseSubStepRope} setRoll={setRollRope} upgrade={upgradeRope} />
          <SubStat index={1} sub={subRope} setSubStat={setSubStatRope} increaseSubStep={increaseSubStepRope} decreaseSubStep={decreaseSubStepRope} setRoll={setRollRope} upgrade={upgradeRope} />
          <SubStat index={2} sub={subRope} setSubStat={setSubStatRope} increaseSubStep={increaseSubStepRope} decreaseSubStep={decreaseSubStepRope} setRoll={setRollRope} upgrade={upgradeRope} />
          <SubStat index={3} sub={subRope} setSubStat={setSubStatRope} increaseSubStep={increaseSubStepRope} decreaseSubStep={decreaseSubStepRope} setRoll={setRollRope} upgrade={upgradeRope} />
        </PlanarPiece>
      </div>
    </div>
  );
}
