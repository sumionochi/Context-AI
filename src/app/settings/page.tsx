import SubscriptionButton from "@/components/SubscriptionButton";
import { subCheck } from "@/lib/subscriptions";
import React from "react";

type Props = {};

const SettingsPage = async (props: Props) => {
  const isPro = await subCheck();
  return (
    <div className="flex min-h-screen pb-28 items-center justify-center flex-col mt-8 gap-2">
      <div className="border bg-primary-foreground rounded-lg border-secondary flex items-center justify-center flex-col p-4 gap-1">
        <h1 className="text-3xl font-bold">Settings</h1>
        {isPro ? (
          <p className="text-xl text-secondary-foreground/60">
            You are a pro user!
          </p>
        ) : (
          <p className="text-xl text-secondary-foreground/60 mb-0">
            You are a free user
          </p>
        )}

        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;