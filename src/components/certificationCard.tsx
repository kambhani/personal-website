import {
  Image,
  Chip,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react";

export default function CertificationCard({
  cert,
}: {
  cert: {
    company: string;
    name: string;
    image: string;
    description: string;
    skills: string[];
  };
}) {
  return (
    <Card
      key={cert.name}
      className="w-72 bg-gradient-to-br from-slate-100 to-slate-50 px-1 pt-1 sm:w-96 dark:from-slate-900 dark:to-slate-950"
    >
      <CardHeader className="block">
        <p className="text-tiny font-bold uppercase text-foreground/60">
          {cert.company}
        </p>
        <h4 className="text-large font-medium text-foreground">{cert.name}</h4>
      </CardHeader>
      <Image
        alt="Card background"
        className="h-full w-full object-contain p-4"
        src={`/certifications/${cert.image}`}
      />
      <CardBody className="text-sm">{cert.description}</CardBody>
      <CardFooter className="flex flex-row flex-wrap gap-2">
        {cert.skills.map((skill) => (
          <Chip size="sm" key={skill}>
            {skill}
          </Chip>
        ))}
      </CardFooter>
    </Card>
  );
}
