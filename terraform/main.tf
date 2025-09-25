terraform {
  backend "azurerm" {
    use_azuread_auth = true
    use_oidc         = true
  }

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=4.0.0"
    }
  }
}

provider "azurerm" {
  use_oidc = true
  features {}
}

resource "azurerm_dns_zone" "dns_zone" {
  name                = "asgerthyregod.dk"
  resource_group_name = data.azurerm_resource_group.predefined_resource_group.name

  lifecycle {
    prevent_destroy = true
  }
}
