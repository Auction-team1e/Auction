import { BrandAddModal } from "@/components/BrandAddModal";
import { Stack } from "@mui/material";

export default function Page() {
  return (
    <Stack alignItems={`center`}>
      <Stack width={1720}>
        <BrandAddModal />
      </Stack>
    </Stack>
  );
}
