import { bootstrapCameraKit } from "@snap/camera-kit";

(async function () {
    const cameraKit = await bootstrapCameraKit({
        apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI4NDEzMTUyLCJzdWIiOiI2ZTY1NjkyNC1hYzc5LTQ2MDAtOWU1Zi02M2YyZWVhYWI2NjF-U1RBR0lOR344OWI0MGQ4Yi1jOTY0LTQ5OTUtOWFkNC00NThkMGEwNjVhYWEifQ.01jq2pPDI9iXylWl6UCBFWeCT3GzshZpkzCL6CCHo3A'
    });

    const liveRenderTarget = document.getElementById('canvas') as HTMLCanvasElement;
    
    // Spiegeling toevoegen via CSS-transformatie
    liveRenderTarget.style.transform = 'scaleX(-1)';

    const session = await cameraKit.createSession({ liveRenderTarget });

    const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: 'user'
        }
    });


    await session.setSource(mediaStream);
    await session.play();

    const lens = await cameraKit.lensRepository.loadLens('9c456053-460c-4480-a600-0fbc5a97fe84', '8f1e9505-86ad-46eb-8552-ecff9d1be776');
    await session.applyLens(lens);

})();
