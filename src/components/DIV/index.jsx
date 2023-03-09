import { Buttons } from '../Buttons';
import { H1 } from '../H1';
import { P } from '../P';

export const Div = () => {
  return (
    <>
      <H1 />
      <P />
      <br />
      <Buttons text={'muda título'} tipo={'muda'} />
      <Buttons text={'inverter'} tipo={'inverter'} />
      <Buttons text={'soma contador'} tipo={'contador'} />
    </>
  );
};
