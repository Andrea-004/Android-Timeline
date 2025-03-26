import { Card, CardContent, Typography } from "@mui/material";

export default function CardComponent({ title, value }) {
  return (
    <Card sx={{ bgcolor: "#66B394", p: 2, marginBottom: "100px" }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">{title}</Typography>
        <Typography>{value}</Typography>
      </CardContent>
    </Card>
  );
}
