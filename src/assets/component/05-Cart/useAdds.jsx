import { useState } from "react";

export const useAdds = () => {
  const [click1, upClick1] = useState(true);
  const [click2, upClick2] = useState(false);
  const [click3, upClick3] = useState(false);
  const [click4, upClick4] = useState(false);

  // Item
  const [item1, upItem1] = useState(true);
  const [item2, upItem2] = useState(false);
  const [item3, upItem3] = useState(false);
  const [item4, upItem4] = useState(false);

  const funOne = () => {
    upClick1(true);
    upItem1(true);

    upClick2(false);
    upClick3(false);
    upClick4(false);

    upItem2(false);
    upItem3(false);
    upItem4(false);
  };
  const funTwo = () => {
    upClick2(true);
    upItem2(true);

    upClick1(false);
    upClick3(false);
    upClick4(false);

    upItem1(false);
    upItem3(false);
    upItem4(false);
  };
  const funThree = () => {
    upClick3(true);
    upItem3(true);

    upClick1(false);
    upClick2(false);
    upClick4(false);

    upItem1(false);
    upItem2(false);
    upItem4(false);
  };
  const funFour = () => {
    upClick4(true);
    upItem4(true);

    upClick1(false);
    upClick2(false);
    upClick3(false);

    upItem1(false);
    upItem2(false);
    upItem3(false);
  };

  return {
    click1,
    click2,
    click3,
    click4,

    upClick1,
    upClick2,
    upClick3,
    upClick4,

    item1,
    item2,
    item3,
    item4,

    upItem1,
    upItem2,
    upItem3,
    upItem4,

    funOne,
    funTwo,
    funThree,
    funFour,
  };
};
