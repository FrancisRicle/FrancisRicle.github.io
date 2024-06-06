import { type Signal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import type { RefObject } from "preact"
interface Props {
  left: Signal<string>;
  cursor: Signal<string>;
  right: Signal<string>;
  command: Signal<string>;
  output: Signal<RefObject<HTMLDivElement>>
}
export default function Input({ left, cursor, right, command, output }: Props) {
  const inputenter = new CustomEvent<undefined>("inputenter")
  useEffect(() => {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "Right":
          if (left.value != "") {
            cursor.value = left.value[0];
            left.value = left.value.slice(1);
            right.value = cursor.value;
            command.value = "/" + left.value + cursor.value + right.value
          }
        case "ArrowLeft":
        case "Left":
          if (right.value != "") {
            cursor.value = right.value.slice(-1);
            right.value = right.value.slice(0, right.value.length - 1);
            left.value = cursor.value;
            command.value = "/" + left.value + cursor.value + right.value
          }
        case "Backspace":
          if (left.value != "") {
            left.value = left.value.slice(1);
            command.value = "/" + left.value + cursor.value + right.value
          }
        case "Enter":
          command.value = left.value + cursor.value + right.value
          document.body.dispatchEvent(inputenter)
        default:
          window.htmx.process(output.value.current)
          command.value = "/" + left.value + cursor.value + right.value
          left.value += e.key
      }
    })
  }, [])
  return (<div class="flex-row">
    {left}
    <span class="inline px-0 border-none">{cursor}</span>
    {right}
  </div>)
}
