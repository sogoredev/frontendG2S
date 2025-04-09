import {CategorieModel} from "./categorie.model";
import { ProduitModel } from "./produit.model";
import { VenteModel } from "./vente.model";

export interface VenteProduitModel{
  // idVenteProduit: number | null,
  montant: number,
  quantite: number,
  reduction: number,
  produit: ProduitModel,
  vente: VenteModel
}
