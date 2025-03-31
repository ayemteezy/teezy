import { tabs } from "@/consts";
import { TabHeader } from "./components/tab-header";
import { Passion } from "./components/passion/passion";
import { TechStack } from "./components/tech-stack/tech-stack";
import { PersonalLife } from "./components/personal-life/personal-life";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Certificates } from "./components/certificates/certificates";

export const AboutTabs = () => {
  return (
    <Tabs
      className="w-full flex flex-col items-center"
      defaultValue={tabs[0].name}
    >
      <TabsList className="flex flex-wrap items-center justify-center h-auto bg-transparent mb-8 gap-2 px-4">
        {tabs.map((tab) => (
          <TabsTrigger
            value={tab.name}
            key={tab.name}
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer px-6 py-2 rounded-full flex items-center gap-2 min-w-[140px] text-center justify-center"
          >
            <tab.icon className="size-4" />
            <span className="whitespace-nowrap">{tab.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent
          key={tab.name}
          value={tab.name}
          className="w-full flex flex-col items-center"
        >
          <TabHeader title={tab.title || ""} subtitle={tab.description || ""} />
          {tab.name === "Tech Stack" && <TechStack />}
          {tab.name === "Certificates" && <Certificates />}
          {tab.name === "Passion" && <Passion />}
          {tab.name === "Personal Life" && <PersonalLife />}
        </TabsContent>
      ))}
    </Tabs>
  );
};
