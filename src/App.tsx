import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
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
  const [like, setLike] = useState("");
  const [dontLike, setDontLike] = useState("");
  const [beGrown, setBeGrown] = useState("");

  return (
    <Stack spacing={2}>
      <FormControl fullWidth>
        <InputLabel id="like">好きなフルーツ</InputLabel>
        <Select
          labelId="like"
          id="like-select"
          value={like}
          label="好きなフルーツ"
          onChange={({ target }) => setLike(target.value)}
        >
          {ITEMS.filter(
            ({ value }) => ![dontLike, beGrown].includes(value)
          ).map((item) => (
            <MenuItem value={item.value} key={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="dont-like">嫌いなフルーツ</InputLabel>
        <Select
          labelId="dont-like"
          id="dont-like-select"
          value={dontLike}
          label="嫌いなフルーツ"
          onChange={({ target }) => setDontLike(target.value)}
        >
          {ITEMS.filter(({ value }) => ![like, beGrown].includes(value)).map(
            (item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.label}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="be-grown">育てたいフルーツ</InputLabel>
        <Select
          labelId="be-grown"
          id="be-grown-select"
          value={beGrown}
          label="育てたいフルーツ"
          onChange={({ target }) => setBeGrown(target.value)}
        >
          {ITEMS.filter(({ value }) => ![like, dontLike].includes(value)).map(
            (item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.label}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </Stack>
  );
}

export default App;
