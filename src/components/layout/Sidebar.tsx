import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ConfigProvider, Layout, Menu, theme } from "antd";
import { useSelector, RootState } from "store";

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
};
const darkTheme = {
  algorithm: theme.darkAlgorithm,
};

type SidebarProps = {
  path: string | string[];
};

const Sidebar: React.FC<SidebarProps> = ({ path }) => {
  const { Sider } = Layout;
  const currentTheme = useSelector((state: RootState) => state.theme.mode);

  const router = useRouter();
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(["dashboard"]);

  const handleOpen = (keys: string[]) => {
    setOpenKeys(keys);
  };

  const handleSelect = ({ key }: { key: string }) => {
    setSelectedKeys([key]);
  };

  const handleClick = (url: string) => {
    router.push(url);
  };

  const items = [
    {
      key: "dashboard",
      label: "Dashboard",
      onClick: () => handleClick("/dashboard"),
    },
    {
      key: "project",
      label: "Project",
      children: [
        {
          key: "project1",
          label: "Project 1",
          onClick: () => handleClick("/dashboard/project1"),
        },
        {
          key: "project2",
          label: "Project 2",
          onClick: () => handleClick("/dashboard/project2"),
        },
      ],
    },
    {
      key: "analytics",
      label: "Analytics",
      children: [
        {
          key: "analytics1",
          label: "Analytics 1",
          onClick: () => handleClick("/dashboard/analytics1"),
        },
        {
          key: "analytics2",
          label: "Analytics 2",
          onClick: () => handleClick("/dashboard/analytics2"),
        },
      ],
    },
    {
      key: "finance",
      label: "Finance",
      children: [
        {
          key: "finance1",
          label: "Finance 1",
          onClick: () => handleClick("/dashboard/finance1"),
        },
        {
          key: "finance2",
          label: "Finance 2",
          onClick: () => handleClick("/dashboard/finance2"),
        },
      ],
    },
  ];

  useEffect(() => {
    const currentPath = path?.toString();
    let openedKeys: string[] = [];
    let selectedKeys: string[] = [];

    if (currentPath) {
      items.forEach((item) => {
        if (item.key === currentPath) {
          selectedKeys = [currentPath];
          openedKeys = item.children ? [item.key] : [];
        } else if (item.children) {
          item.children.forEach((child) => {
            if (child.key === currentPath) {
              selectedKeys = [currentPath];
              openedKeys = [item.key];
            }
          });
        }
      });
    }

    if (!selectedKeys.length && currentPath) {
      router.push("/dashboard");
    }

    if (!currentPath) {
      selectedKeys = ["dashboard"];
    }

    setOpenKeys(openedKeys);
    setSelectedKeys(selectedKeys);
  }, [path]);

  return (
    <ConfigProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <Sider>
        <Menu
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          mode="inline"
          items={items}
          className="h-[calc(100vh-112px)]"
          onOpenChange={handleOpen}
          onSelect={handleSelect}
        />
      </Sider>
    </ConfigProvider>
  );
};

export default Sidebar;
