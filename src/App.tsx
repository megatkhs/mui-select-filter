import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import "./App.css";

const ITEMS = [
  {
    value: "apple",
    label: "リンゴ🍎",
  },
  {
    value: "grape",
    label: "ブドウ🍇",
  },
  {
    value: "orange",
    label: "オレンジ🍊",
  },
  {
    value: "strawberry",
    label: "イチゴ🍓",
  },
  {
    value: "doughnut",
    label: "ドーナツ🍩",
  },
  {
    value: "pizza",
    label: "プザ🍕",
  },
];

function App() {
  const [selectedList, setSelectedList] = useState(["", "", "", ""]);

  return (
    <Stack spacing={2}>
      {selectedList.map((selected, index) => (
        <FormControl fullWidth>
          <InputLabel id={`select-label-${index + 1}`}>
            好きなフルーツ({index + 1})
          </InputLabel>
          <Select
            labelId={`select-label-${index + 1}`}
            id={`select-${index + 1}`}
            value={selected}
            label={`好きなフルーツ(${index + 1})`}
            onChange={({ target }) =>
              setSelectedList((selectedList) =>
                selectedList.toSpliced(index, 1, target.value)
              )
            }
          >
            {ITEMS.filter(
              ({ value }) => !selectedList.toSpliced(index, 1).includes(value)
            ).map((item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </Stack>
  );
}

export default App;
