import { SiFandom, SiWikidotgg } from "@icons-pack/react-simple-icons";
import {
  EmptyIcon,
  NumberEightIcon,
  NumberFiveIcon,
  NumberFourIcon,
  NumberNineIcon,
  NumberOneIcon,
  NumberSevenIcon,
  NumberSixIcon,
  NumberThreeIcon,
  NumberTwoIcon,
  NumberZeroIcon,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "~/lib/utils";

type RoadmapElement = {
  title: React.ReactNode;
  description: React.ReactNode;
  datePlanned: Date;
  releaseVersion?: `v${number}.${number}.${number}`;
  status: RoadmapElementStatus;
};

export type RoadmapElementStatus =
  "in progress" | "completed" | "planned" | "cancelled";

function getPhosphorDigitIcon(number: number): React.ReactNode {
  let IconType: Icon;
  switch (number) {
    case 0:
      IconType = NumberZeroIcon;
      break;
    case 1:
      IconType = NumberOneIcon;
      break;
    case 2:
      IconType = NumberTwoIcon;
      break;
    case 3:
      IconType = NumberThreeIcon;
      break;
    case 4:
      IconType = NumberFourIcon;
      break;
    case 5:
      IconType = NumberFiveIcon;
      break;
    case 6:
      IconType = NumberSixIcon;
      break;
    case 7:
      IconType = NumberSevenIcon;
      break;
    case 8:
      IconType = NumberEightIcon;
      break;
    case 9:
      IconType = NumberNineIcon;
      break;
    default:
      IconType = NumberZeroIcon;
      break;
  }
  return <IconType className="max-w-10" color="var(--color-secondary)" />;
}

const WikiePlans: RoadmapElement[] = [
  {
    title: (
      <>
        End settings and add wiki.gg <SiWikidotgg className="inline" /> with
        fandom <SiFandom className="inline" /> base search
      </>
    ),
    description:
      "Add wiki.gg with fandom for the case when base search to the extension to fill panel with some results if it doesn't have any independent wiki results.",
    datePlanned: new Date(2026, 6, 7),
    releaseVersion: "v0.2.0",
    status: "in progress",
  },
  {
    title: "Add stats",
    description: (
      <>
        Add stats to the extension to show <b>user activity and usage</b>,{" "}
        <b>frequent visits</b> and <b>visited wiki sources</b>
      </>
    ),
    datePlanned: new Date(2026, 6, 7),
    releaseVersion: "v0.3.0",
    status: "planned",
  },
  {
    title: "Add requests caching",
    description:
      "Add requests caching to the extension to avoid redundant requests and improve performance.",
    datePlanned: new Date(2026, 6, 7),
    releaseVersion: "v0.5.0",
    status: "planned",
  },
  {
    title: "Add wikie panel to other game related sites",
    description: (
      <>
        Add wikie panel sites like <b>Epic Games</b>, <b>GOG</b>, <b>Fandom</b>,{" "}
        <b>wiki.gg</b>, and other game related sites.
      </>
    ),
    datePlanned: new Date(2026, 6, 7),
    releaseVersion: "v0.7.0",
    status: "planned",
  },
  {
    title: (
      <>
        Create a{" "}
        <a
          href="https://steambrew.app/"
          className="link text-tertiary"
          target="_blank"
        >
          Millenium
        </a>{" "}
        plugin
      </>
    ),
    description:
      "Create a plugin for the Millenium gateway for steam client to show wiki in library and and other steam parts",
    datePlanned: new Date(2026, 6, 7),
    status: "planned",
  },
];

export function PlanElementStatusBadge(props: {
  status: RoadmapElement["status"];
  className?: string;
}) {
  const color = useMemo(() => {
    switch (props.status) {
      case "in progress":
        return "bg-blue-500";
      case "completed":
        return "bg-green-500";
      case "planned":
        return "bg-yellow-500";
      case "cancelled":
        return "bg-red-500";
      default:
        return "bg-tertiary/40";
    }
  }, [props]);

  return (
    <div className={cn(`w-fit p-2 px-3`, props.className, color)}>
      <span className="text-sm font-bold">{props.status}</span>
    </div>
  );
}

type RoadmapPlansProps = {
  filter?: (plan: RoadmapElement) => boolean;
};

function RoadmapPlans({ filter }: RoadmapPlansProps) {
  const dateFormatter = useMemo(() => {
    const userLocale = navigator.language;

    const formatter = new Intl.DateTimeFormat(userLocale, {
      dateStyle: "short",
    });

    return formatter;
  }, []);

  const [filteredPlans, setFilteredPlans] = useState(WikiePlans);

  useEffect(() => {
    if (filter) {
      setFilteredPlans(WikiePlans.filter(filter));
    } else {
      setFilteredPlans(WikiePlans);
    }
  }, [filter]);

  if (filteredPlans.length === 0)
    return (
      <div className="mt-2 flex flex-col gap-2">
        <div className="bg-tertiary/40 p-2">
          <p className="flex items-center justify-center gap-4 text-center text-dm-2">
            <EmptyIcon size={24} color="var(--color-tertiary)"></EmptyIcon>No
            such plans found.
          </p>
        </div>
      </div>
    );

  return (
    <div className="mt-2 flex flex-col gap-2">
      {filteredPlans.map((plan, index) => (
        <div key={index} className="bg-tertiary/40 p-2">
          <div className="flex items-center">
            {getPhosphorDigitIcon(index + 1)}
            <h1 className="w-full text-right text-2xl font-bold">
              {plan.title}
            </h1>
          </div>
          <p className="my-2 border-t-2 border-b-2 border-dashed border-tertiary py-2 text-balance">
            {plan.description}
          </p>
          <div className="mt-2 flex items-center justify-between text-dm-1">
            <div className="flex items-center">
              <PlanElementStatusBadge status={plan.status} />
              {plan.releaseVersion && (
                <div className="ml-2 text-sm font-bold">
                  {plan.releaseVersion}
                </div>
              )}
            </div>
            <h3 className="ml-2 text-sm font-bold">
              Planned on:{" "}
              <span className="text-secondary">
                {dateFormatter.format(plan.datePlanned)}
              </span>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoadmapPlans;
