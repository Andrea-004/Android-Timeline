import { Grid, Card, CardContent, Typography } from "@mui/material";

export default function CardGrid() {
  return (
    <Grid container spacing={-20} justifyContent="center" sx={{ mt: 10}}>
    <Grid item xs={12} sm={4} md={3}>
        <Card sx={{ bgcolor: "#0E9464", p: 2, width: "15rem" }}>
          <CardContent style={{color: "#FFFDD0", textAlign: "center"}}>
            <Typography variant="h6" fontWeight="bold">Dato curioso</Typography>
            <Typography>
            Los nombres de Android solían ser postres. Desde Android 1.5 Cupcake hasta Android 9 Pie, cada versión tenía el nombre de un postre en orden alfabético.
            </Typography>
            <img src="./androidVer.jpeg" alt="" style={{ display: "block", margin: "auto", maxWidth: "100%", height: "auto", paddingTop: "20px" }} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} md={3}>
        <Card sx={{ bgcolor: "#0E9464", p: 2, width: "15rem" }}>
          <CardContent style={{color: "#FFFDD0", textAlign: "center"}}>
            <Typography variant="h6" fontWeight="bold">Dato curioso</Typography>
            <Typography>
            Android no fue creado por Google. La compañía Android lo desarrolló en 2003, y Google la adquirió en 2005 su propio sistema operativo móvil.
            </Typography>
            <img src="./google.jpeg" alt="" style={{ display: "block", margin: "auto", maxWidth: "100%", height: "auto", paddingTop: "27px" }} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} md={3}>
        <Card sx={{ bgcolor: "#0E9464", p: 2, width: "15rem" }}>
          <CardContent style={{color: "#FFFDD0", textAlign: "center"}}>
            <Typography variant="h6" fontWeight="bold">Dato curioso</Typography>
            <Typography>
            El robot de Android tiene nombre. La icónica mascota verde se llama "Bugdroid" y representa la esencia abierta y amigable del sistema.
            </Typography>
            <img src="./androidMascot.webp" alt="" style={{ display: "block", margin: "auto", maxWidth: "100%", height: "auto", paddingTop: "3px" }} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
