import Orphange from "../models/Orphanage";
import imagesView from "./images_views";

export default {
  render(orphanage: Orphange) {
    return {
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      id: orphanage.id,
      images: imagesView.renderMany(orphanage.images),
    };
  },

  renderMany(orphanages: Orphange[]) {
    orphanages.map((orphanage) => {
      this.render(orphanage);
    });
  },
};
