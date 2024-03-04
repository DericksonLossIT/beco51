import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-[1/2vh] md:py-10">
      <Image
        width={500}
        alt="Logo Beco51 Image"
        src="https://utfs.io/f/f850d2a4-e030-4cb2-8379-898e845c8797-v7vlpu.svg"
        isBlurred
        className="transition ease-in-out delay-300 hover:-translate-y-3 hover:scale-110 duration-300"
      />
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Em construção</h1>
      </div>

      <div className="flex gap-3">
        {/* <Link
          isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Documentation
        </Link> */}
        <Link
          isExternal
          className={buttonStyles({
            color: "warning",
            variant: "bordered",
            radius: "full",
          })}
          href={siteConfig.links.whatsapp}
        >
          <Image
            height={20}
            width={20}
            alt="Whatsapp Logo"
            src="https://utfs.io/f/f4483a5d-7168-40a6-973e-ac11d5daf026-9vyq5r.svg"
          />
          WhatsApp
        </Link>
      </div>

      {/* <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
