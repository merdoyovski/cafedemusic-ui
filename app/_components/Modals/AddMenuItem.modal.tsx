"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/app/_hooks/useModal";
import { cn } from "@/app/_utils/tw.utils";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const NewItemModal = (props: any) => {
  const modalOpen = useModal((state) => state.addNewItemModalOpen);
  const setModalOpen = useModal((state) => state.setAddNewItemModalOpen);

  return (
    <AnimatePresence mode="wait">
      {modalOpen && (
        <motion.div
          className={cn(
            "fixed left-0 top-0 z-20 h-full w-full bg-[rgba(0,0,0,0.74)] backdrop-blur"
          )}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setModalOpen()}
        >
          <motion.div
            className="flex h-full items-center justify-center "
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="max-h-[1000px] min-h-[623px] w-[436px] rounded-2xl bg-white"
              initial="hidden"
              onClick={(e) => e.stopPropagation()}
              animate="visible"
              exit="hidden"
            >
              <div className="mx-auto flex   flex-col    text-info-gray">
                <div className="mx-auto mt-3 flex w-[296px] flex-col  items-center gap-4 text-info-gray">
                  <div className="flex h-[151px] w-[130px] flex-col items-center justify-center rounded-xl bg-info-gray text-almost-white">
                    <text className="mt-2 font-CeraProBold text-xs font-bold">
                      {"AVAILABLE"}
                    </text>

                    <text>0.31</text>
                  </div>
                </div>
                <text className="font-CeraProMedium text-xl"></text>

                <div className="flex w-full flex-col gap-1 font-CeraProBold text-base font-bold text-info-gray"></div>

                <div className="w-full space-y-2"></div>

                <div className="flex gap-1 font-CeraProBold text-xs"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewItemModal;
