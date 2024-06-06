import type { Signal } from "@preact/signals";
import type { RefObject } from "preact";
import { useEffect, useRef } from "preact/hooks";
interface Props {
  command: Signal<string>;
  output: Signal<RefObject<HTMLDivElement>>
}
export default function Output({ command, output }: Props) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current !== null) {
      console.log(ref);
      console.log(output)
      output.value = ref
    }
  }, [ref])
  return <div ref={ref} id="output" hx-trigger="inputenter from:body" hx-swap="beforeend" hx-get={command}>
    {command}
  </div>
}
