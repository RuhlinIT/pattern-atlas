import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Angular vendor factory",
  code: `export type Vendor = "stripe" | "adyen";

export interface Client { vendor: Vendor }
export interface Mapper { vendor: Vendor }
export interface Adapter { vendor: Vendor }

export abstract class VendorFactory {
  abstract createClient(): Client;
  abstract createMapper(): Mapper;
  abstract createAdapter(): Adapter;
}`,
  explanation:
    "Angular can use abstract factories to manage integration families by vendor.",
};