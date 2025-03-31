import { useState } from "react";
import Image from "next/image";
import { certificates } from "@/consts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlurFade } from "@/components/magicui/blur-fade";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { ChevronLeftIcon, ChevronRightIcon, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(
    null
  );
  const [certificateDialogOpen, setCertificateDialogOpen] = useState(false);

  const handleCertificateClick = (index: number) => {
    setSelectedCertificate(index);
    setCertificateDialogOpen(true);
  };

  const handlePrevCertificate = () => {
    if (selectedCertificate !== null) {
      setSelectedCertificate(
        selectedCertificate === 0
          ? certificates.length - 1
          : selectedCertificate - 1
      );
    }
  };

  const handleNextCertificate = () => {
    if (selectedCertificate !== null) {
      setSelectedCertificate(
        selectedCertificate === certificates.length - 1
          ? 0
          : selectedCertificate + 1
      );
    }
  };

  return (
    <>
      <BlurFade inView delay={0.75} className="w-full px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {certificates.map((certificate, index) => (
            <Card
              key={certificate.name}
              className="overflow-hidden py-0 cursor-pointer group relative"
              onClick={() => handleCertificateClick(index)}
            >
              <CardContent className="relative aspect-video">
                <Image
                  src={certificate.src}
                  alt={certificate.name}
                  layout="fill"
                  objectFit="cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>
              <p className="absolute bottom-2 left-2 right-2 bg-white text-primary text-xs px-3 py-1 rounded-md shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {certificate.name}
              </p>
            </Card>
          ))}
        </div>
      </BlurFade>
      <div className="w-full">
        <Dialog
          open={certificateDialogOpen}
          onOpenChange={setCertificateDialogOpen}
        >
          <DialogContent className="w-full h-full sm:w-full sm:h-full p-0 lg:p-4 border-0 md:max-w-[75vw] md:max-h-[75vh] lg:max-w-[66vw] lg:max-h-[66vh] sm:rounded-lg overflow-hidden">
            <VisuallyHidden.Root>
              <DialogTitle>Certificate Preview</DialogTitle>
            </VisuallyHidden.Root>
            {selectedCertificate !== null && (
              <>
                <div className="absolute top-2 right-2 z-10">
                  <DialogClose className="rounded-full p-2 bg-background/80 backdrop-blur-sm hover:bg-background">
                    <X className="h-5 w-5" />
                  </DialogClose>
                </div>

                <div className="relative w-full h-full flex items-center justify-center  bg-black/50">
                  <div className="relative w-full h-full max-h-full flex items-center justify-center">
                    <Image
                      src={certificates[selectedCertificate].src}
                      alt={`${certificates[selectedCertificate].name} certificate`}
                      fill
                      className="object-contain"
                    />

                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm ml-2 hover:bg-background"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevCertificate();
                        }}
                      >
                        <ChevronLeftIcon className="h-6 w-6" />
                      </Button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm mr-2 hover:bg-background"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextCertificate();
                        }}
                      >
                        <ChevronRightIcon className="h-6 w-6" />
                      </Button>
                    </div>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                      {selectedCertificate + 1} / {certificates.length}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
