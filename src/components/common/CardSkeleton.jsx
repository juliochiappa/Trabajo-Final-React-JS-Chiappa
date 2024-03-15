import { Stack, Skeleton, Box } from "@mui/material";

export const CardSkeleton = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        boxShadow: "0px 0px 5px grey",
        borderRadius: 2,
        width: 300,
        height: 310,
        overflow: "hidden",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Skeleton
        variant="rectangular"
        width={345}
        height={120}
        animation="wave"
      />

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Skeleton variant="text" width={220} height={50} animation="wave" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Skeleton variant="text" width={250} height={40} animation="wave" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Skeleton variant="text" width={200} height={40} animation="wave" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Skeleton
          variant="rectangular"
          width={130}
          height={30}
          animation="wave"
        />
      </Box>
    </Stack>
  );
};
