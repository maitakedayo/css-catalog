import { useState } from "react";
import { Listbox } from "@headlessui/react";
//import { CheckIcon } from "@heroicons/react/20/solid";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

import MyDialog from "./MyDialog.tsx";
import frbImage from "/public/frb.png";
import suzukiImage from "/public/suzuki.png";
import cheImage from "/public/che.png";

const people = [
  {
    id: 1,
    name: "Jay Powell",
    comment: "Is it okay to postpone the interest rate cut?",
    image: frbImage,
  },
  {
    id: 2,
    name: "鈴木 俊一",
    comment: "為替の行き過ぎた動きには適切に対応するがよろしいか?",
    image: suzukiImage,
  },
  {
    id: 3,
    name: "崔相穆",
    comment: "과도한 환율 움직임에 적절하게 대응하겠습니까?",
    image: cheImage,
  },
];

export default function MyListbox() {
  const [selectedPerson, setSelectedPerson] = useState<{
    id: number;
    name: string;
    comment: string;
    image: string;
  } | null>(null); // 選択された人物を記憶
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePersonSelect = (person: {
    id: number;
    name: string;
    comment: string;
    image: string;
  }) => {
    setSelectedPerson(person);
    setIsDialogOpen(true);
  };

  return (
    <div className="relative">
      <Listbox value={selectedPerson} onChange={handlePersonSelect}>
        <Listbox.Button className="cursor-content-menu relative start-[400px] top-[310px] w-[515px] rounded-lg bg-pink-100 py-2 pl-3 pr-10 text-left shadow-md hover:border hover:border-indigo-500 sm:text-sm">
          <span className="block truncate text-center">
            {selectedPerson?.name || "Select a person"}
          </span>
        </Listbox.Button>
        <Listbox.Options className="relative start-[410px] top-[310px] w-[495px]">
          {people.map((person) => (
            <Listbox.Option key={person.id} value={person}>
              {({ selected }) => (
                <li className="bg-blue-100 text-black hover:bg-blue-500 hover:text-white">
                  <span className="insert-y-0 pointer-events-none right-0 flex items-center pr-2">
                    {/**focusと同じ */}
                    {selected && (
                      <ChevronUpDownIcon
                        className="text-gray size-5"
                        aria-hidden="true"
                      />
                    )}
                    {person.name}
                  </span>
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>

      <MyDialog
        title={selectedPerson?.name || ""}
        description={selectedPerson?.comment || ""}
        image={selectedPerson?.image || ""}
        okLabel="OK"
        cancelLabel="キャンセル"
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}
