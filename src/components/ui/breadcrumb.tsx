import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return <Comp ref={ref} className={cn("transition-colors hover:text-foreground", className)} {...props} />;
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li role="presentation" aria-hidden="true" className={cn("[&>svg]:size-3.5", className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  // higher-level helper
  Breadcrumbs,
};

// Higher-level breadcrumbs builder that consumes the current location
// and renders clickable crumbs. Supports a labelMapping for dynamic
// routes (e.g. {'/book/slug-value': 'Book Title'}) and optional
// `connections` to render related links (like siblings or anchors).
type Connection = { label: string; to: string };

type BreadcrumbsProps = {
  labelMapping?: Record<string, string>;
  // optional mapping from the accumulated path to the link destination
  routeMapping?: Record<string, string>;
  connections?: Connection[];
  showHome?: boolean;
  homeTo?: string;
};

function titleizeSegment(seg: string) {
  if (!seg) return "";
  // decode and replace hyphens/underscores
  const s = decodeURIComponent(seg).replace(/[-_]/g, " ");
  return s.replace(/(^|\s)\S/g, (t) => t.toUpperCase());
}

function Breadcrumbs({ labelMapping, routeMapping, connections, showHome = true, homeTo = "/" }: BreadcrumbsProps) {
  const { pathname } = useLocation();

  // handle root
  if (!pathname) return null;

  const parts = pathname.split("/").filter(Boolean);
  const crumbs: { to: string; label: string }[] = [];

  // accumulate path
  parts.reduce((acc, part) => {
    const to = acc === "/" ? `/${part}` : `${acc}/${part}`;
    const mapped = labelMapping && labelMapping[to];
    crumbs.push({ to, label: mapped ?? titleizeSegment(part) });
    return to;
  }, "/");

  return (
    <Breadcrumb aria-label="breadcrumb">
      <BreadcrumbList>
        {showHome && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={homeTo}>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {crumbs.length > 0 && <BreadcrumbSeparator />}
          </>
        )}

        {crumbs.map((c, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <React.Fragment key={c.to}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{c.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        {/** allow overriding the target route for a crumb (e.g. map '/book' label to '/learn' route) */}
                        <Link to={routeMapping?.[c.to] ?? c.to}>{c.label}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
              {idx < crumbs.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}

        {/* render connections as small inline links after a separator */}
        {connections && connections.length > 0 && (
          <>
            <BreadcrumbSeparator />
            {connections.map((conn, i) => (
              <React.Fragment key={conn.to}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={conn.to}>{conn.label}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {i < connections.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
