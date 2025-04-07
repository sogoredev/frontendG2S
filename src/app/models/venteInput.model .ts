import {CategorieModel} from "./categorie.model";
import { ClientModel } from "./client.model";
import { ClientInputModel } from "./clientInputModel.model ";
import { ProduitModel } from "./produit.model";
import { UserModel } from "./user.model";
import { VenteModel } from "./vente.model";

export interface VenteInputModel{
  quantite: number,
  reduction?: number,
  produit: ProduitModel[],
  clientInput: ClientInputModel,
}
