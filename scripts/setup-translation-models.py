"""Install the three official Argos models needed for Spanish → en/pt/fr."""
import argostranslate.package as packages

wanted = {('es', 'en'), ('es', 'pt'), ('en', 'fr')}
installed = {(package.from_code, package.to_code) for package in packages.get_installed_packages()}
packages.update_package_index()
for package in packages.get_available_packages():
    if (package.from_code, package.to_code) in wanted - installed:
        print(f'Installing {package.from_code} → {package.to_code} ({package.package_version})', flush=True)
        packages.install_from_path(package.download())
