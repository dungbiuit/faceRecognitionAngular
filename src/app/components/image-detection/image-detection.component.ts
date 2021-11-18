import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as faceapi from 'face-api.js'

const MODEL_URI = "/model"
export let IMAGE_GET = ElementRef
export interface Prediction {
  className: string;
  probability: number;
}
@Component({
  selector: 'app-image-detection',
  templateUrl: './image-detection.component.html',
  styleUrls: ['./image-detection.component.css']
})
export class ImageDetectionComponent implements OnInit {
  model: any;
  loading = true;
  imageSource: string = "";
  predictions: Prediction[] = [];
  constructor() { }


  async ngOnInit(): Promise<void> {

  }

  localUrl: any[] = [];
    functionWork = async (event:any) => {
        Promise.all([
          await faceapi.loadSsdMobilenetv1Model(MODEL_URI),
          await faceapi.loadFaceLandmarkModel(MODEL_URI),
          await faceapi.loadFaceRecognitionModel(MODEL_URI)
        ]).then(async (): Promise<void> => {
        const image = await faceapi.bufferToImage(event.target.files[0])
        const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()
        this.detectionShow = detections.length
        })
      }

  detectionShow: any;
  showPreviewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
      }
      this.functionWork(event)
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
