"use client";
import {useText} from "@/i18n/use-text";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "@/i18n/navigation";
import { Home, Mail, Music2, RefreshCw, UsersRound } from "lucide-react";

type LinkAction = {
  href: string;
  label: string;
  icon: "home" | "mail" | "music" | "users";
  variant?: "primary" | "secondary";
};

type RetryAction = {
  label: string;
  onClick: () => void;
};

type ErrorPageStateProps = {
  status: string;
  title: string;
  description: string;
  actions?: LinkAction[];
  retryAction?: RetryAction;
  global?: boolean;
  /** Extra content under the actions, e.g. popular links on the 404 page. */
  children?: ReactNode;
};

const actionIcons = {
  home: Home,
  mail: Mail,
  music: Music2,
  users: UsersRound,
};

function ActionIcon({ name }: { name: LinkAction["icon"] }) {
  const Icon = actionIcons[name];
  return <Icon size={18} strokeWidth={2.1} aria-hidden="true" />;
}

export function ErrorPageState({
  status,
  title,
  description,
  actions = [],
  retryAction,
  global = false,
  children,
}: ErrorPageStateProps) {
  const tx = useText();
  return (
    <section className={["error-page", global ? "error-page--global" : ""].join(" ")}>
      <div className="error-page-inner">
        <Image
          className="error-page-logo"
          src="/logo-mark-transparent.webp"
          alt={tx("A medio tono")}
          width={635}
          height={548}
          loading="eager"
          sizes="76px"
        />

        <div className="error-page-copy-block">
          <p className="error-page-status">{tx(status)}</p>
          <h1 className="error-page-title">{tx(title)}</h1>
          <p className="error-page-description">{tx(description)}</p>
        </div>

        <div className="error-page-actions" aria-label={tx("Opciones")}>
          {retryAction ? (
            <button className="error-page-action error-page-action--primary" type="button" onClick={retryAction.onClick}>
              <RefreshCw size={18} strokeWidth={2.1} aria-hidden="true" />
              <span>{tx(retryAction.label)}</span>
            </button>
          ) : null}

          {actions.map((action) => (
            <Link
              className={[
                "error-page-action",
                action.variant === "secondary"
                  ? "error-page-action--secondary"
                  : "error-page-action--primary",
              ].join(" ")}
              href={action.href}
              key={`${action.href}-${action.label}`}
            >
              <ActionIcon name={action.icon} />
              <span>{tx(action.label)}</span>
            </Link>
          ))}
        </div>

        {children}
      </div>
    </section>
  );
}
