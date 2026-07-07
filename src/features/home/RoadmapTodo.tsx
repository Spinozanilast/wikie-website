import {
  CheckSquareIcon,
  SpinnerIcon,
  SquareIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { fetchGithubReadme } from "~lib/queries";

type TodoItem = {
  text: string;
  checked: boolean;
  children: TodoItem[];
};

function parseTodoItems(markdown: string): TodoItem[] {
  const lines =
    markdown.split(/todo\n([\S\s]+?)(?:$(?![\r\n])|#)/im)[1]?.split("\n") ?? [];
  const entries: { text: string; checked: boolean; level: number }[] = [];

  for (const line of lines) {
    const match = line.match(/^(\s*)- \[([ x])\]\s+(.+)/);
    if (match) {
      entries.push({
        text: match[3],
        checked: match[2] === "x",
        level: Math.floor(match[1].length / 2),
      });
    }
  }

  const elements: TodoItem[] = [];
  const prevParent: { item: TodoItem; level: number }[] = [];

  for (const entry of entries) {
    const node: TodoItem = {
      text: entry.text,
      checked: entry.checked,
      children: [],
    };
    while (
      prevParent.length > 0 &&
      prevParent[prevParent.length - 1].level >= entry.level
    ) {
      prevParent.pop();
    }
    if (prevParent.length === 0) {
      elements.push(node);
    } else {
      prevParent[prevParent.length - 1].item.children.push(node);
    }
    prevParent.push({ item: node, level: entry.level });
  }

  return elements;
}

function TodoList({ items }: { items: TodoItem[] }) {
  return (
    <ul className="flex flex-col gap-0.5">
      {items.map((item, i) => (
        <li key={i}>
          <span className="flex items-start gap-2 text-dm-2">
            {item.checked ? (
              <CheckSquareIcon
                size={24}
                className="mt-0.5 shrink-0 text-secondary"
                weight="fill"
              />
            ) : (
              <SquareIcon size={24} className="mt-0.5 shrink-0 text-tertiary" />
            )}
            <span
              className={
                item.checked ? "text-tertiary line-through opacity-60" : ""
              }
            >
              {item.text}
            </span>
          </span>
          {item.children.length > 0 && (
            <div className="mt-0.5 ml-6">
              <TodoList items={item.children} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function RoadmapTodo() {
  const [items, setItems] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchGithubReadme("spinozanilast/wikie")
      .then((readme) => {
        setItems(parseTodoItems(readme));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <SpinnerIcon size={24} className="animate-spin text-tertiary" />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <p className="p-4 text-center text-dm-1 text-tertiary">
        No todo items found
      </p>
    );
  }

  return (
    <div className="p-3">
      <TodoList items={items} />
    </div>
  );
}

export default RoadmapTodo;
