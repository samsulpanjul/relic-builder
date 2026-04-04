"use client";

import { Button } from "@/src/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import RelicList from "./components/relic-list";

const RelicPage = () => {
  const router = useRouter();

  return (
    <div className="wrapper card">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold">Relic Store</h1>
        <Button
          variant={"secondary"}
          className="font-medium"
          onClick={() => router.push("/relic/create")}
        >
          <Plus /> Create
        </Button>
      </div>
      <div>
        <RelicList />
      </div>
    </div>
  );
};

export default RelicPage;
