import { ExternalLink } from "lucide-react";
import { RoundedShape } from "../share/rounded-shape";

interface LinkItem {
  title: string;
  description?: string;
  url: string;
}

interface FancyLinksListProps {
  links: LinkItem[];
  title?: string;
  subtitle?: string;
}

export const LinkList = ({ links, title, subtitle }: FancyLinksListProps) => {
  return (
    <RoundedShape className="w-full max-w-5xl mx-auto px-2 md:px-12">
      {(title || subtitle) && (
        <div className="text-center mb-10 flex flex-col gap-2">
          {title && (
            <h2 className="font-display text-2xl md:text-5xl font-bold gradient-text mb-3 text-secondary-custom">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-muted-foreground text-lg">{subtitle}</p>
          )}
        </div>
      )}

      <div className="flex flex-col w-full">
        {links.map((link, index) => {
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block  animate-slide-up relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card gradient-border hover-lift p-5 group-hover:glow-effect transition-all duration-300">
                <div className="flex items-center gap-4">
                  {/* Icon container with gradient background */}
                  <div className="relative shrink-0">
                    <div className="rounded-xl bg-linear-to-br from-main/20 to-secondary-custom/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                      <ExternalLink className="text-secondary-custom group-hover:scale-110 transition-transform duration-300 group-hover:text-fourth" />
                    </div>
                    {/* Glow effect behind icon */}
                    <div className="absolute inset-0 rounded-xl bg-linear-to-br from-main to-secondary-custom opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-lg text-secondary-custom group-hover:text-fourth transition-colors duration-300 wrap-break-word">
                      {link.title}
                    </h3>
                    {link.description && (
                      <p className="text-muted-foreground text-sm mt-0.5 truncate wrap-break-word">
                        {link.description}
                      </p>
                    )}
                  </div>

                  {/* Arrow indicator */}
                  <div className="shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-secondary-custom group-hover:text-fourth"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom gradient line that appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-main via-secondary-custom to-main opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          );
        })}
      </div>
    </RoundedShape>
  );
};
