import { Backlog, Completed, In_Progress, Next_Up, Not_STarted } from "../../assets"
  const Items_Data = [
    {
      src: In_Progress,
      class: `absolute bottom-3 w-12 left-0`,
    },
    {
      src: Backlog,
      class: `absolute bottom-3 h-12 right-0`,
    },
    {
      src: Next_Up,
      class: `absolute bottom-3 h-12 right-[40%]`,
    },
    {
      src: Not_STarted,
      class: `absolute bottom-16 h-12 right-[10%]`,
    },
    {
      src: Completed,
      class: `absolute bottom-16 right-[35%]`,
    },
  ]
export default Items_Data