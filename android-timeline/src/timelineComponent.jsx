import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Smartphone';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          23 de septiembre de 2008
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{backgroundColor: "#0E9464"}}>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#0E9464" fontWeight="bold">
          Android 1.0 (Ver. 1.0 - 1.1)
          </Typography>
          <Typography style={{textAlign: "left"}}>
            <p>
                <span style={{ fontWeight: 'bold' }}>Nivel de API:</span> 1 - 2
            </p>
            Se lanza la primera versión estable de Android.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          27 de abril de 2009
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{ backgroundColor: "#66B394" }}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#66B394" fontWeight="bold">
          Android Cupcake (Ver. 1.5)
          </Typography>
          <Typography style={{textAlign: "right"}}>
            <p>
                <span style={{ fontWeight: 'bold' }}>Nivel de API:</span> 3
            </p>
          Interfaz optimizada, teclado virtual, widgets personalizables, soporte para copiar y pegar en el navegador, transiciones animadas y rotación automática de pantalla.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          5 de septiembre de 2009
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{backgroundColor: "#0E9464"}}>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#0E9464" fontWeight="bold">
          Android Donut (Ver. 1.6)
          </Typography>
          <Typography style={{textAlign: "left"}}>
            <p>
                <span style={{ fontWeight: 'bold' }}>Nivel de API:</span> 4
            </p>
          Mejoras en búsqueda y Android Market, compatibilidad con más formatos de pantalla, sintetizador de voz, optimización de cámara y galería, además de soporte para CDMA y VPN.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          26 de octubre de 2009
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{ backgroundColor: "#66B394" }}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#66B394" fontWeight="bold">
          Android Eclair (Ver. 2.0 - 2.1)
          </Typography>
          <Typography style={{textAlign: "right"}}>
            <p>
                <span style={{ fontWeight: 'bold' }}>Nivel de API:</span> 5 - 7
            </p>
          Mejoras en Maps con rutas optimizadas, soporte para varias cuentas, Live Wallpapers, compatibilidad con Flash y zoom, además de actualizaciones en apps preinstaladas como Maps, navegador y calendario.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          20 de mayo de 2010
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{backgroundColor: "#0E9464"}}>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#0E9464" fontWeight="bold">
          Android Froyo (Ver. 2.2 - 2.2.3)
          </Typography>
          <Typography style={{textAlign: "left"}}>
            <p>
                <span style={{ fontWeight: 'bold' }}>Nivel de API:</span> 8
            </p>
          Navegación mejorada con comandos de voz, puntos de acceso Wi-Fi, soporte para Flash, notificaciones push C2DM y la opción de mover apps a la SD para mayor flexibilidad.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          6 de diciembre de 2010
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{ backgroundColor: "#66B394" }}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#66B394" fontWeight="bold">
          Android Gingerbread (Ver. 2.3 - 2.3.7)
          </Typography>
          <Typography style={{textAlign: "right"}}>
            <p>
                <span style={{ fontWeight: 'bold' }}>Nivel de API:</span> 9 - 10
            </p>
          Mejoras en juegos con nueva API, soporte para NFC, múltiples cámaras, giroscopio y barómetro. Incluye videollamadas en Hangouts, primer easter egg, rediseño de iconos, compatibilidad con resolución WXGA y selección antes de copiar.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          22 de febrero de 2011
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{backgroundColor: "#0E9464"}}>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#0E9464" fontWeight="bold">
          Android Honeycomb (Ver. 3.0 - 3.2.6)
          </Typography>
          <Typography style={{textAlign: "left"}}>
            <p>
                <span style={{ fontWeight: 'bold' }}>Nivel de API:</span> 11 - 13
            </p>
          Optimizado para tablets, con System Bar, ajustes rápidos, pestañas en el navegador, aceleración por hardware y soporte para USB OTG.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          18 de octubre de 2011
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{ backgroundColor: "#66B394" }}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#66B394" fontWeight="bold">
          Android Ice Cream Sandwich (Ver. 4.0 - 4.0.4)
          </Typography>
          <Typography style={{textAlign: "right"}}>
            <p>
                <span style={{ fontWeight: 'bold' }}>Nivel de API:</span> 14 - 15
            </p>
          Interfaz Holo, barra de navegación, capturas de pantalla, desbloqueo facial y gestión de notificaciones.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          9 de julio de 2012
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{backgroundColor: "#0E9464"}}>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#0E9464" fontWeight="bold">
          Android Jelly Bean (Ver. 4.1 - 4.3.1)
          </Typography>
          <Typography style={{textAlign: "left"}}>
          <p>
        <span style={{ fontWeight: 'bold' }}>Nivel de API:</span> 16 - 18
      </p>
          Google Now, movimientos suaves, ajustes rápidos, accesibilidad mejorada y widgets en bloqueo.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          31 de octubre de 2013
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{ backgroundColor: "#66B394" }}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#66B394" fontWeight="bold">
          Android KitKat (Ver. 4.4 - 4.4.4)
          </Typography>
          <Typography style={{textAlign: "right"}}>
          <p>
        <span style={{ fontWeight: 'bold' }}>Nivel de API:</span> 19 - 20
      </p>
          Cambios de diseño, modo inmersivo, ART y renovación de las apps de Reloj, Teléfono y Descargas.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
            4 de noviembre de 2014
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{backgroundColor: "#0E9464"}}>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#0E9464" fontWeight="bold">
          Android Lollipop (Ver. 5.0 - 5.1.1)
          </Typography >
          <Typography style={{textAlign: "left"}}>
          <p>
        <span style={{ fontWeight: 'bold' }}>Nivel de API:</span> 21 - 22
      </p>
            Material Design, nueva pantalla de bloqueo, mejoras de rendimiento, optimización en Recientes y buscador de ajustes.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          5 de octubre de 2015
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{ backgroundColor: "#66B394" }}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#66B394" fontWeight="bold">
          Android Marshmallow (Ver. 6.0 - 6.0.1)
          </Typography>
          <Typography style={{textAlign: "right"}}>
          <p>
        <span style={{ fontWeight: 'bold' }}>Nivel de API:</span> 23
      </p>
          Permisos en tiempo de ejecución, modo Doze, soporte para USB-C y 4K, lector de huellas, multiventana experimental, Direct Share y Now on Tap.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          22 de agosto de 2016
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{backgroundColor: "#0E9464"}}>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#0E9464" fontWeight="bold">
          Android Nougat (Ver. 7.0 - 7.1.2)
          </Typography>
          <Typography style={{textAlign: "left", maxWidth: "45rem"}}>
          <p><span style={{ fontWeight: "bold" }}>Nivel de API:</span> 24 - 25</p>
          Mejoras en Doze y compilador JIT, VR Daydream, modo multiventana, PIP en Android TV, Vulkan 3D, ajustes rápidos de apps y accesos rápidos en el launcher.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          21 de agosto de 2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{ backgroundColor: "#66B394" }}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#66B394" fontWeight="bold">
          Android Oreo (Ver. 8.0 - 8.1)
          </Typography>
          <Typography style={{textAlign: "right"}}>
          <p><span style={{ fontWeight: "bold" }}>Nivel de API:</span> 26 - 27</p>
          Project Treble, modo PIP para móviles, iconos adaptativos, cambios en notificaciones, API de autocompletado y optimizaciones de rendimiento.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          6 de agosto de 2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{backgroundColor: "#0E9464"}}>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#0E9464" fontWeight="bold">
          Android Pie (Ver. 9.0)
          </Typography>
          <Typography style={{textAlign: "left", maxWidth: "40rem"}}>
          <p><span style={{ fontWeight: "bold" }}>Nivel de API:</span> 28</p>
            Mejoras de privacidad, brillo y batería inteligente, app actions, app slices, bienestar digital y navegación por gestos.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          3 de septiembre de 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{ backgroundColor: "#66B394" }}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#66B394" fontWeight="bold">
          Android 10 (Ver. 10.0)
          </Typography>
          <Typography style={{textAlign: "right"}}>
          <p><span style={{ fontWeight: "bold" }}>Nivel de API:</span> 29</p>
          Modo oscuro, subtítulos en tiempo real, respuestas inteligentes, nueva navegación por gestos, optimizaciones para plegables, mejoras de privacidad y actualizaciones del sistema de Google Play.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          8 de septiembre de 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{backgroundColor: "#0E9464"}} >
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#0E9464" fontWeight="bold">
          Android 11 (Ver. 11.0)
          </Typography >
          <Typography style={{textAlign: "left", maxWidth: "44rem"}}>
          <p><span style={{ fontWeight: "bold" }}>Nivel de API:</span> 30</p>
            Cambios en notificaciones, burbujas de chat, grabador de pantalla nativo, domótica en el menú de apagado, permiso de una vez y Android Auto inalámbrico para todos.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          4 de octubre de 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{ backgroundColor: "#66B394" }}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#66B394" fontWeight="bold">
          Android 12 (Ver. 12.0)
          </Typography>
          <Typography style={{textAlign: "right"}}>
          <p><span style={{ fontWeight: "bold" }}>Nivel de API:</span> 31</p>
          Material You, mejoras de privacidad, permiso de ubicación aproximada, indicativos de uso de micrófono, cámara y ubicación, eliminación de domótica del menú de apagado, mejoras de rendimiento y capturas de pantalla con desplazamiento.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          7 de marzo de 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{backgroundColor: "#0E9464"}}>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#0E9464" fontWeight="bold">
          Android 12L (Ver. 12.1)
          </Typography>
          <Typography style={{textAlign: "left"}}>
          <p><span style={{ fontWeight: "bold" }}>Nivel de API:</span> 32</p>
          Optimizada para tablets, plegables y ordenadores, con barra de tareas inferior, mejoras en multitarea y multiventana, y diseño a dos columnas.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          15 de agosto de 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{ backgroundColor: "#66B394" }}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#66B394" fontWeight="bold">
          Android 13 (Ver. 13.0)
          </Typography>
          <Typography style={{textAlign: "right"}}>
          <p><span style={{ fontWeight: "bold" }}>Nivel de API:</span> 33</p>
          Más personalización con Material You, cambios en permisos, nuevo permiso de notificaciones, elección de idioma por app, lector QR, nuevo selector de fotos, apps activas y nuevo menú del portapapeles.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          4 de octubre de 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{backgroundColor: "#0E9464"}}>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#0E9464" fontWeight="bold">
          Android 14 (Ver. 14.0)
          </Typography>
          <Typography style={{textAlign: "left"}}>
          <p><span style={{ fontWeight: "bold" }}>Nivel de API:</span> 34</p>
          Personalización con temas generados por IA, refuerza la seguridad con actualizaciones de privacidad y alertas contra accesos no autorizados, y ofrece funciones de accesibilidad más completas.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          3 de septiembre de 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{ backgroundColor: "#66B394" }}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#66B394" fontWeight="bold">
          Android 15 (Ver. 15.0)
          </Typography>
          <Typography style={{textAlign: "right"}}>
          <p><span style={{ fontWeight: "bold" }}>Nivel de API:</span> 35</p>
          Mejor rendimiento con ahorro de batería, archivo de aplicaciones, compatibilidad con frecuencia de actualización variable y mejor descodificación AV1. Incluye funciones de protección como bloqueo remoto, autenticación para configuraciones sensibles y bloqueo tras intentos fallidos de acceso.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          13 de marzo de 2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{backgroundColor: "#0E9464"}}>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#0E9464" fontWeight="bold">
          Android 16 (Ver. 16.0 Beta 3)
          </Typography>
          <Typography style={{textAlign: "left"}}>
          <p><span style={{ fontWeight: "bold" }}>Nivel de API:</span> 36</p>
          Diseños adaptables y nuevas notificaciones, mientras introduce funciones de cámara avanzadas, como exposición híbrida, ajuste de color y fotos en movimiento, además de mejoras en UltraHDR y codificación HEIC.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    
    </Timeline>
  );
}
