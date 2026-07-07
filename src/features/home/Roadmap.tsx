import { useState } from "react";
import TitledSection from "~features/home/TitledSection";
import RoadmapPlans, {
  PlanElementStatusBadge,
} from "~features/home/RoadmapPlans";
import type { RoadmapElementStatus } from "~features/home/RoadmapPlans";
import RoadmapTodo from "~features/home/RoadmapTodo";
import { ChecksIcon } from "@phosphor-icons/react";

function Roadmap() {
  const [selectedStatus, setSelectedStatus] =
    useState<RoadmapElementStatus | null>(null);

  const statuses: RoadmapElementStatus[] = [
    "in progress",
    "planned",
    "completed",
    "cancelled",
  ];

  return (
    <div className="flex size-full flex-1 grid-cols-2 flex-col gap-2 px-3 md:grid">
      <div>
        <TitledSection
          title="Plans"
          id=""
          classNames={{ titleContainer: "bg-tertiary/80" }}
          filterSection={
            <div className="flex flex-wrap justify-center gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() =>
                    setSelectedStatus(selectedStatus === status ? null : status)
                  }
                  className="hover:scale-105 active:scale-110"
                >
                  <PlanElementStatusBadge
                    status={status}
                    className={
                      selectedStatus !== null && selectedStatus !== status
                        ? "opacity-40"
                        : undefined
                    }
                  />
                </button>
              ))}
            </div>
          }
        >
          <RoadmapPlans
            filter={
              selectedStatus
                ? (plan) => plan.status === selectedStatus
                : undefined
            }
          />
        </TitledSection>
      </div>
      <div>
        <TitledSection
          title="Todo"
          id=""
          icon={ChecksIcon}
          classNames={{ titleContainer: "bg-tertiary/80" }}
        >
          <RoadmapTodo />
        </TitledSection>
      </div>
    </div>
  );
}

export default Roadmap;
